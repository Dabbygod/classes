(function () {

    function getExitKey() {
        return localStorage.getItem("exitKey") || "BracketRight";
    }

    window.addEventListener("keydown", (e) => {
        const key = getExitKey();

        // Don't trigger while typing
        const active = document.activeElement;
        if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA")) return;

        // If already on index.html → do nothing
        if (window.location.pathname.endsWith("index.html")) return;

        // Otherwise → go home
        window.location.href = "../index.html";
    });

})();
