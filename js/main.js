function changeLanguage(lang) {
    const translations = {
        en: {
            "blog-title": "My Blog",
            "post-title-1": "First Blog Post",
            "post-excerpt-1": "This is a short excerpt of the first blog post.",
            "read-more": "Read More",
            "single-post-title": "First Blog Post",
            "single-post-content": "This is the full content of the first blog post.",
            "back-to-home": "Back to Homepage"
        },
        ru: {
            "blog-title": "Mi Blog",
            "post-title-1": "Primer Publicación del Blog",
            "post-excerpt-1": "Este es un breve extracto de la primera publicación del blog.",
            "read-more": "Leer Más",
            "single-post-title": "Primer Publicación del Blog",
            "single-post-content": "Este es el contenido completo de la primera publicación del blog.",
            "back-to-home": "Volver a la página principal"
        }
    };

    // Обновление текста на странице
    for (const key in translations[lang]) {
        const element = document.getElementById(key);
        if (element) {
            element.innerText = translations[lang][key];
        }
        
        // Обновление текста в ссылках
        const links = document.querySelectorAll(`[data-lang-${lang}]`);
        links.forEach(link => {
            link.innerText = link.getAttribute(`data-lang-${lang}`);
        });
    }
}