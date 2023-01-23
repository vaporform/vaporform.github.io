const textContainer = document.getElementById("ctext");
            window.onscroll = function() {
            var scroll = window.scrollY;
            if (scroll > 20) {
                textContainer.innerHTML = "NW";
            }
            if (scroll < 20) {
                textContainer.innerHTML = "NETWESTS";
            }
        }