/*
   Cloak Engine — Inspired by Phantom101
   Copyright © 2026
   Portions inspired by Phantom (phantom101). Not affiliated.
*/

(function () {

    // Change tab title + favicon
    function cloakTab(title, icon) {
        document.title = title;
        document.querySelectorAll("link[rel*='icon']").forEach(l => l.remove());
        const link = document.createElement("link");
        link.rel = "icon";
        link.href = icon;
        document.head.appendChild(link);
    }

    // Build popup HTML with iframe
    function buildPopup(url, title, icon) {
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <title>${title}</title>
                <link rel="icon" href="${icon}">
                <style>
                    body,html { margin:0; padding:0; height:100%; overflow:hidden; }
                    iframe { width:100%; height:100%; border:none; }
                </style>
            </head>
            <body>
                <iframe src="${url}" id="main-frame"></iframe>
            </body>
            </html>
        `;
    }

    // Open popup window
    function openCloaked(url, title, icon) {
        const win = window.open("about:blank", "_blank");
        if (!win) return false;

        win.document.write(buildPopup(url, title, icon));
        win.document.close();

        return true;
    }

    // Redirect original tab to Classroom
    function redirectToClassroom() {
        window.location.replace("https://classroom.google.com");
    }
   function launchCloak(url) {

    const win = window.open("about:blank", "_blank");

    if (!win) {
        alert("Popup blocked!");
        return;
    }

    win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Classroom</title>
            <style>
                html, body {
                    margin: 0;
                    height: 100%;
                    overflow: hidden;
                }
                iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                }
            </style>
        </head>
        <body>
            <iframe src="${url}"></iframe>
        </body>
        </html>
    `);

    win.document.close();
}

    // Launch cloak
    function launch(url) {
        const success = openCloaked(
            url,
            "Classroom",
            "https://ssl.gstatic.com/classroom/favicon.png"
        );

        if (success) {
            redirectToClassroom();
        } else {
            // Popup blocked → load inside this tab
            document.getElementById("main-frame").src = url;
        }
    }

    // Start cloak when page loads
    window.addEventListener("DOMContentLoaded", () => {
        cloakTab("Classroom", "https://ssl.gstatic.com/classroom/favicon.png");
        launch("index.html");
    });

})();
