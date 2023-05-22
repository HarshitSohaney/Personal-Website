let searchElement = document.getElementById('search');

searchElement.addEventListener('keyup', function(event) {
    if (event.key == "Enter") {
        let found = false;

        console.log("Enter key pressed")
        let input = document.getElementById('search').value;
        input = input.toLowerCase();
        let x = document.getElementsByClassName('search-tag');
        
        for (i = 0; i < x.length; i++) { 
            if (x[i].innerHTML.toLowerCase().includes(input)) {
                let options = x[i].getBoundingClientRect();
                window.scrollTo(0, options.top - 100);

                // if it is an accordian, open it
                if (x[i].classList.contains('accordian')) {
                    x[i].click();
                }
                
                found = true;
            }
        }

        if (found === false) {
            alert("No results found");
        }
    }
});