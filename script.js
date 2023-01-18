
let coin = document.querySelector(".coin");
window.addEventListener("load", (flipCoin));

function flipCoin(){
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
        }, 100);
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
        }, 100);
    }
    setTimeout(3000);
    // disableButton();
};

// function disableButton(){
//     flipBtn.disabled = true;
//     setTimeout(function(){
//         flipBtn.disabled = false;
//     },3000);
// };