let h3 = document.getElementsByClassName('ingr-h3')

console.log(h3);
for (let i = 0; i < h3.length; i++) {
    h3[i].addEventListener("click", function (e) {
        console.log(h3[i].nextElementSibling.style.display)
        if (h3[i].nextElementSibling.style.display == "none") {
            h3[i].nextElementSibling.style.display = "block"
            h3[i].className = "ingr-h3 rotate-90";
        } else {
            h3[i].nextElementSibling.style.display = "none"
            h3[i].className = "ingr-h3 rotate90";

        }
    })
}

