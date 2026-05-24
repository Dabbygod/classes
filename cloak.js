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

    // Build popup HTML with iframe (not used by your new cloak, but safe to keep)
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

    // Open popup window (unused by your new cloak, but harmless)
    function openCloaked(url, title, icon) {
        const win = window.open("about:blank", "_blank");
        if (!win) return false;

        win.document.write(buildPopup(url, title, icon));
        win.document.close();

        return true;
    }

    // Keep ONLY the tab cloak on load
    window.addEventListener("DOMContentLoaded", () => {
        cloakTab("Classroom", "https://ssl.gstatic.com/classroom/favicon.png");
    });

})();
