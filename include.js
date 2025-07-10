document.addEventListener("DOMContentLoaded", function() {
    const includes = document.querySelectorAll('[data-include]');
    includes.forEach(async function(el) {
        const file = el.getAttribute("data-include");
        try {
            const resp = await fetch(file);
            if (resp.ok) {
                el.innerHTML = await resp.text();
            } else {
                el.innerHTML = "Content not found.";
            }
        } catch (err) {
            el.innerHTML = "Error loading content.";
        }
    });
});
