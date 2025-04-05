
function changeLanguage(lang) {
    const translations = {
        ru: {
            
        },
        en: {
            
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