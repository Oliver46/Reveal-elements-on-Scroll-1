window.addEventListener('scroll', reveal);

function reveal(){
    var reveal = document.querySelectorAll(".reveal");

    for(var i =0; i < reveal.length; i++){
        var windowHeight = window.innerHeight;
       
        var revealTop = reveal[i].getBoundingClientRect().top;
        console.log(revealTop);
        var revealpoint = 150;

        if(revealTop < windowHeight - revealpoint){
            reveal[i].classList.add('active');
        }else{
            reveal[i].classList.remove('active');
        }
    }
}