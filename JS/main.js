const textContainer = document.getElementById("ctext");
        window.onscroll = function() {
            var scroll = window.scrollY;
            if (scroll > 20) {
                textContainer.innerHTML = "VF";
                }
            if (scroll < 20) {
                textContainer.innerHTML = "VAPORFROM";
                }
        }


const textContainer2 = document.getElementById("rtext");
const textList = ["Vapor's Playground", "Hello visitor!","Buu EDU", "Is Pi a pie?", "Github Pages","NEWBORNED WEBSITE","I make music... Sometimes.","Gotta add more projetcs :T"];
        
function displayRandomText() {
  var randomIndex = Math.floor(Math.random() * textList.length);
  textContainer2.innerHTML ="<b>"+ textList[randomIndex]+ "</b>";    }

  displayRandomText();
        