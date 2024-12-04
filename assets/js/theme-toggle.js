document.addEventListener('DOMContentLoaded', function () {
    const themeToggleContainer = document.getElementById('theme-toggle-container');
    const darkTheme = document.getElementById('dark-theme');
    const lightTheme = document.getElementById('light-theme');
  
    themeToggleContainer.addEventListener('click', function () {
      if (darkTheme.disabled) {
        darkTheme.disabled = false;
        lightTheme.disabled = true;
      } else {
        darkTheme.disabled = true;
        lightTheme.disabled = false;
      }
    });
  });
  