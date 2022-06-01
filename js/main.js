/* 置頂按鈕
-------------------------------------------------- */

function scrolltop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}   

/* 選擇方案
-------------------------------------------------- */

const planBtn =  document.querySelectorAll(".plan-btn");
const planBtnLength =  planBtn.length;
let userNum = document.querySelectorAll(".user-num");
let priceA = document.querySelector(".price-a");
let priceB = document.querySelector(".price-b");
const oringinPriceA = 600;
const oringinPriceB = 1600;
const priceAInterval = 200;
const priceBInterval = 600;

planBtn.forEach((item, index) => {
    item.addEventListener("click", function(e) {
        planBtn.forEach(element => {
            element.classList.remove("active");
        })
        e.target.classList.add("active");
        userNum.forEach(element => {
            element.innerHTML = `${e.target.textContent.slice(0,-1)}<sub>位</sub>`;
        })
        if((index + 1) == planBtnLength) {
            priceA.textContent = "洽客服";
            priceB.textContent = "洽客服";   
        }
        else {
            priceA.innerHTML = `${oringinPriceA + index * priceAInterval}<sub>TWD</sub>`;
            priceB.innerHTML = `${oringinPriceB + index * priceBInterval}<sub>TWD</sub>`;    
        }
    })
})

/* 常見問題卡片展開
-------------------------------------------------- */

const questionBtn =  document.querySelectorAll(".question-btn");
const iconPlus = "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_plus.svg"
const iconMinus = "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/chatTalker_images/icon_minus.svg"

questionBtn.forEach(item => {
    item.addEventListener("click", function(e) {
        let hasClass = e.target.closest(".card").classList.contains("active");
        if(hasClass) {
            e.target.closest(".card").classList.remove("active");
            e.currentTarget.querySelector("img").src = iconPlus;
        }
        else {
            e.target.closest(".card").classList.add("active");
            e.currentTarget.querySelector("img").src = iconMinus;
        }
    })
})