let spiderman = document.getElementById("spider-man");
let x = document.getElementById("x");
let y = document.getElementById("y");
let imgchanges = document.getElementById("imgchange");

spiderman.onclick = function () {
  imgchange.src =
    "https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-hero-banner-desktop-07-en-16oct23?$1600px$";
};
x.onclick = function () {
  imgchange.src =
    "https://gmedia.playstation.com/is/image/SIEPDC/deep-earth-collection-red-and-blue-keyart-01-en-03nov23?$1200px$";
};
y.onclick = function () {
  imgchange.src =
    "https://gmedia.playstation.com/is/image/SIEPDC/alen-wake-2-keyart-01-en-17oct23?$1200px$";
    const div= document.createElement("textContainer");
    const button= document.createElement("button-Red");
    div.appendChild(button);
    document.body.appendChild(div);
};

