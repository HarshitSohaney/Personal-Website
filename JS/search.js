let searchElement = document.getElementById('search');

searchElement.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        let searchValue = searchElement.value;
        return find(searchValue, false, false, false, false, true);
}
});

let mainContent = document.querySelector('.main-content');
mainContent.addEventListener('scroll', function() {
    let navbar = document.querySelector('#search');
  
    // add the class navbar-fixed and topbar-display to navbar when we reach #search on scroll
    if (mainContent.scrollTop >= navbar.offsetTop) {
        navbar.classList.add('navbar-fixed');
        navbar.classList.add('topbar-display');
    }
    else {
        navbar.classList.remove('navbar-fixed');
        navbar.classList.remove('topbar-display');
    }
  });