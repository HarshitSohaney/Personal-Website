// When the user scrolls the page, execute myFunction
let mainContent = document.querySelector('.main-content');

mainContent.onscroll = function() {
  // get the scroll percentage of main-content
  winScroll = mainContent.scrollTop;
  height = mainContent.scrollHeight - mainContent.clientHeight;
  scrollPercentage = winScroll / height;
  document.getElementById("myBar").style.width = scrollPercentage*100 + "%";
}
