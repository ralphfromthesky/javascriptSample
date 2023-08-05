function translate(key, lang) {
    switch (lang) {
        case 'en':
            return enTranslations[key] || key;
        case 'vi':
            return viTranslations[key] || key;
        case 'pi':
            return piTranslations[key] || key;
        default:
            return key; // If language not found, return the key itself
    }
}

function applyTranslations(lang) {
    const translatedElements = document.querySelectorAll('.translated');
    translatedElements.forEach((element) => {
        const key = element.dataset.key;
        const translatedText = translate(key, lang);
        element.textContent = translatedText;
        localStorage.setItem('selectedLanguage', lang)
    });
}

const getSelectedLanguage = () => {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    return selectedLanguage || 'en';
}

document.getElementById('btnEn').addEventListener('click', function () {
    applyTranslations('en');
});

document.getElementById('btnVi').addEventListener('click', function () {
    applyTranslations('vi');
});
document.getElementById('btnPi').addEventListener('click', function () {
    applyTranslations('pi');
});


// Apply the default translations (English) on page load
applyTranslations(getSelectedLanguage());
