//1
document.querySelector(".side-bar .crayons-subtitle-2").innerHTML = "Chandrakala P"
document.querySelector(".side-bar p").innerHTML = "i write code"

//2
let list = document.querySelectorAll(".as-imagegrid-item .as-imagegrid-item-title")

let grpe = [];
for (let i = 0; i < list.length; i++) {
    grpe.push(list[i].innerText)
}



//3
let nav1 = document.querySelector(".accordion-homepage")
let faq = document.createElement("section");
faq.className = "parent";
faq.innerHTML = "<h3 >My new FAQ section</h3>";
console.log(faq);
nav1.appendChild(faq);


//4
document.querySelector(".customer-support a").innerText = "+91 636484899";


//5
document.querySelector(".feature-column-carousel__feature .feature-column-carousel__content .feature-column-carousel__button a").innerText = "Check out"


//6

// let form = document.querySelector(".searchinput-wrapper___18TsX .form");
// form.addEventListener("mouseover", () => {
//     return form.style.backgroundColor = "red";
// })

let search = document.querySelector(".searchinput___zXLAR")
search.addEventListener("mouseover", () => search.style.backgroundColor = "Red")


//7
document.querySelector('#top-nav-search-input').value = "css selectors"
document.querySelector('.header-search .icon-search').click()


//8
let lang = document.querySelector("#SIvCob");
let langlist = document.querySelectorAll("#SIvCob a");
for (let i = 0; i < langlist.length; i++) {
    if (i % 2 != 0) {
        lang.removeChild(langlist[i]);
    }
}

//9
let h1 = document.querySelector(".content-width-extra-large .display-heading-1");
h1.style.color = "red";
h1.style.fontFamily = "monospace"


//10
let btn = document.querySelector(".btn-cta-big .login-btn-text")
btn.addEventListener("mouseover", () => { return btn.style.backgroundColor = "red" })

//11
// document.querySelector(".icon-logo").style.backgroundImage = "https://learnyst.s3.amazonaws.com/assets/schools/2410/resources/images/logo_lco_t17sd.png"


//12
document.querySelector('a.btn.btn-outline.mt-2').style.backgroundColor = "green"

//13
document.querySelector('.fl-heading-text').innerText = "JSBOOTCAMP"


//14
document.querySelector('.HotDealsAll__Heading__2fIbe').style.fontSize = "80px";

//15
document.querySelector('.ps-title').style.textAlign = "right";

//16
document.querySelector('.section-title_title__VEDfK').innerHTML = "Start with Scratch"

//17
document.querySelector('.buy').innerHTML = new Date();

//18
document.querySelector('.p-footer').style.backgroundColor = "Orange"

//19
document.querySelector('.logo').src

//20
document.querySelector('.section-box h3.desc').style.color = "Orange"

