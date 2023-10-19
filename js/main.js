(function init(){
  "use strict";

  // const nightmode_switch = document.getElementById("nightmode_switch");
  const background = document.querySelector(".background");

  // nightmode_switch.addEventListener("click", e => {
  //   if(nightmode_switch.checked) {
  //     background.classList = background.classList[0] + "__night"
  //   } else {
  //     background.classList = background.classList[0].split("__night")[0]
  //   }
  // })
  
  // credits: https://stackoverflow.com/questions/31223341/detecting-scroll-direction
  let lastScrollTop = 0;
  window.addEventListener("scroll", function(){
    let st = window.scrollY || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      document.getElementById("scroll_image").classList.add("scrolling");
    } else if (st < lastScrollTop) {
      document.getElementById("scroll_image").classList.remove("scrolling");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  }, false);

  // form
  let submit = document.querySelector("[type=submit]");
  let form = document.querySelector("form");
  submit.addEventListener("click", function(e){
    e.preventDefault();
    evalForm(form);
  }, false);
  
  const evalForm = (form) => {
    let oldMessage = form.getElementsByClassName("return-message");
    if(oldMessage.length == 1) {;
      oldMessage[0].remove();
    }
    
    let message = document.createElement("p");
    message.classList = "return-message p";
    
    if(document.getElementById("mega-cool").checked) {
      let text = document.createTextNode("Danke schön");
      message.appendChild(text);
      form.appendChild(message);
    } else {
      let text = document.createTextNode("Falsch diese Webseite ist 'Mega Cool'");
      message.appendChild(text);
      form.appendChild(message);
    }
  }
})();