let searchElement = document.getElementById('search');

searchElement.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        let searchValue = searchElement.value;
        return find(searchValue, false, false, false, false, true);
}
});