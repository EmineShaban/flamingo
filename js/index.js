let h3 = document.getElementsByClassName('ingr-h3')

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


let faq = document.getElementsByClassName("faq-content");

const onClick = (e) => {
    if (e.target.className == "q" &&
        e.target.parentElement.children[1].style.display == "none") {
        for (let i = 0; i < e.target.parentElement.parentElement.children.length; i++) {
            e.target.parentElement.parentElement.children[i].children[1].style.display = "none"
        }
        e.target.parentElement.children[1].style.display = "block";
    } else if (e.target.parentElement.children[1].style.display == "block" &&
        e.target.parentElement.children[1].className == "a") {
        e.target.parentElement.children[1].style.display = "none";
    }
};

for (let index = 0; index < faq.length; index++) {
    faq[index].addEventListener("click", onClick);
}







let li = document.getElementsByClassName("zone-li");
let text = document.getElementsByClassName("zone-text");

for (i = 0; i < li.length; i++) {
    let index = i;
    li[i].addEventListener("click", function (e) {
        for (y = 0; y < text.length; y++) {
            text[y].style.display = "none";
            li[y].children[0].children[0].style.border = "unset";
            li[y].children[0].children[1].style.visibility = "hidden";

        }
        text[index].style.display = "flex";
        li[index].children[0].children[0].style.border = "1px solid #2b2b2b8c";
        li[index].children[0].children[1].style.visibility = "visible";


    });
}

