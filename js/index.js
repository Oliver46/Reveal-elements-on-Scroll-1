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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(document.body.scrollTop );
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    document.querySelector(".topSection").classList.add("show");
  }
}