document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".hover-button");

    buttons.forEach((button) => {
        const originalSource = button.getAttribute("src");
        const extensionStart = originalSource.lastIndexOf(".");
        const hoverSource = `${originalSource.slice(0, extensionStart)}-hover${originalSource.slice(extensionStart)}`;

        button.addEventListener("mouseenter", () => {
            button.src = hoverSource;
        });

        button.addEventListener("mouseleave", () => {
            button.src = originalSource;
        });
    });
});