(function () {

    function getExitKey() {
        return localStorage.getItem("exitKey") || "BracketRight";
    }

    window.addEventListener("keydown", (e) => {
        const key = getExitKey();

        const active = document.activeElement;
        if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA")) return;

        if (window.location.pathname.endsWith("index.html")) return;

        window.location.href = "../index.html";
    });

})();
