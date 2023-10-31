
function toggleTheme() {
    const themeStyle = document.getElementById('theme-style');
    const currentTheme = themeStyle.getAttribute('href');

    if (currentTheme === 'stylesheet.css') {
        themeStyle.setAttribute('href', 'nightmode.css');
    } else if (currentTheme === 'nightmode.css') {
        themeStyle.setAttribute('href', 'stylesheet.css');
    }
    //  // Update the class of the switch element to indicate the current theme.
    //  themeStyle.classList.toggle('nightmode');
}
const themeButton = document.getElementById('theme-changer')
themeButton.onclick = toggleTheme



