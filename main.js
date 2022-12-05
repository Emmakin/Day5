const deBtnE1 = document.getElementById('deBtn');
const inBtnE1 = document.getElementById('inBtn');
const num = document.getElementById('num');

let count = 0;

deBtnE1.addEventListener('click', function deCounter(){
    count += -1;
    num.textContent = count;
    if(count < 0){
        num.style.color = 'rgba(233, 245, 7, 0.686)';
    }
});

inBtnE1.addEventListener('click', function inCounter(){
    count += +1;
    num.textContent = count;
    if(count > 0){
        num.style.color = 'rgba(102, 245, 7, 0.686)';
    }
    
});
