document.addEventListener("DOMContentLoaded", function() {
    const sections = [
        { folder: "01-header", id: "header", css: "header.css" },
        { folder: "02-home", id: "home", css: "home.css" },
        { folder: "03-about", id: "about", css: "about.css" },
        { folder: "04-services", id: "services", css: "services.css" },
        { folder: "05-contact", id: "contact", css: "contact.css" },
        { folder: "06-footer", id: "footer", css: "footer.css" }
    ];

    sections.forEach(section => {
        // Cargar el HTML
        fetch(`sections/${section.folder}/${section.id}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById(section.id).innerHTML = data;

                // Cargar el CSS correspondiente
                const linkElement = document.createElement('link');
                linkElement.rel = 'stylesheet';
                linkElement.href = `sections/${section.folder}/${section.css}`;
                document.head.appendChild(linkElement);  // Agrega el CSS al <head> después de cargar la sección
            })
            .catch(error => console.error('Error loading the section:', error));
    });
});