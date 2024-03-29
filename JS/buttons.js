$(document).ready(function(){
    $('#Shuffle').click( function() {
        $(this).attr("src", "icons/shuffle-green.png");
    });
});
function hover_next(element) {
    element.setAttribute("src","icons/next.png");
}
function hover_prev(element) {
    element.setAttribute("src","icons/previous.png");
}
function unhover_next(element) {
    element.setAttribute("src","icons/next-grey.png");
}
function unhover_prev(element) {
    element.setAttribute("src","icons/previous-grey.png");
}
// Next and previous buttons

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top + (rect.height/2) > 0 && // top
        rect.left + (rect.width/2) > 0 && // left
        rect.top + (rect.height/2) < (window.innerHeight || document.documentElement.clientHeight) && // bottom
        rect.left + (rect.width/2) < (window.innerWidth || document.documentElement.clientWidth) // right
    );
}

var sectionArray = new Array(
    'hero',
    'experience',
    'projects',
    'skills',
    'about'
    // 'spotify'
)

var prevButton = document.getElementById('previous-button');
var nextButton = document.getElementById('next-button');

prevButton.onclick = function () {
    var elementnum = checkView();

    document.getElementById(sectionArray[elementnum - 1]).scrollIntoView({behavior: 'smooth'})
};
nextButton.onclick =  function () {
    var elementnum = checkView();

    document.getElementById(sectionArray[elementnum + 1]).scrollIntoView({behavior: 'smooth'})
};

function checkView() {
    
    for(let i = 0; i < sectionArray.length; i++) {
        const box = document.getElementById(sectionArray[i]);

        if(isInViewport(box)) {
            
            if(i>0 || i<sectionArray.length -1) {
                return i;
            }
            
        }
    }
    
};

// For auto scroll

let scrollerID;
let paused = true;
let interval = 40;

function startScroll(){
    $('.play-button').each(function() {
        $(this).attr("src","icons/pause-button.png")
    });
    let id = setInterval(function() {
        setInterval(window.scrollBy(0,10),20);
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) { 
            stopScroll();
        }
    }, interval);
    return id;
}

function stopScroll() {
    clearInterval(scrollerID);
    $('.play-button').each(function() {
        $(this).attr("src","icons/play-button.png")
    });
}

let playButtons = document.getElementsByClassName('play-button');

Array.from(playButtons).forEach(element => {
    element.onclick = function() {
        if(paused) {
            scrollerID = startScroll();
            paused = false;
        } else {
            stopScroll();
            paused = true;
        }
    }
});

$(window).on('scroll', function() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) { 
        stopScroll();
    }
  });

// For the shuffle button
let shuffleButton = document.getElementById('shuffle-button');

shuffleButton.onclick = function() {
    // go to a random section
    let randomNum = Math.floor(Math.random() * sectionArray.length);
    document.getElementById(sectionArray[randomNum]).scrollIntoView({behavior: 'auto'});
}