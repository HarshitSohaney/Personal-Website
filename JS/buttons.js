$(document).ready(function(){
    $('#Shuffle').click( function() {
        $(this).attr("src", "icons/shuffle-green.png");
    });
});

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
    'skills',
    'experience',
    'projects',
    'about',
    'spotify'
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
        const messageText = isInViewport(box) ?
            'The' + sectionArray[i] + 'is visible in the viewport' :
            '';
        if(isInViewport(box)) {
            
            if(i>0 || i<sectionArray.length -1) {
                console.log('setting new prev and next' + sectionArray[i-1] + " " + sectionArray[i+1]);
                return i;
            }
            
        }
    }
    
};

// For auto scroll

let scrollerID;
let paused = true;
let interval = 15;

function startScroll(){
    let id = setInterval(function() {
        window.scrollBy(0, 2000);
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { 
            stopScroll();
        }
    }, interval);
    return id;
}

function stopScroll() {
    clearInterval(scrollerID);
}
document.getElementById('play-button').addEventListener('click', function() {
    if(paused == true) {
        scrollerID = startScroll();
        paused = false;
    }
    else {
        stopScroll();
        paused = true;
    }
}, true);
