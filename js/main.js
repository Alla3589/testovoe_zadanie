
function changeLanguage(lang) {
    const translations = {
        ru: {
            "header-1": "Мой Блог",
            "post-title-1": "Первая Запись Блога",
            "post-excerpt-1": "Это краткий отрывок первой записи блога.",
            "read-more": "Читать далее",
            "single-post-title": "Первая Запись Блога",
            "single-post-content": "Это полный текст первой записи блога.",
            "back-to-home": "Вернуться на главную"
        },
        en: {
            "blog-title": "My Blog",
            "post-title-1": "First Blog Post",
            "post-excerpt-1": "This is a short excerpt of the first blog post.",
            "read-more": "Read More",
            "single-post-title": "First Blog Post",
            "single-post-content": "This is the full content of the first blog post.",
            "back-to-home": "Back to Homepage"
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