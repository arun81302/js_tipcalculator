let billinput = document.querySelector("#bill");
let peopleinput = document.querySelector('#peopleinput');
let buttons = document.querySelectorAll('.btn');
let form = document.querySelector('form');
let tipamount = document.querySelector('.tipamount');
let tipperperson = document.querySelector('.tipperperson');
let errorDiv = document.querySelector('.error');
let reset=document.querySelector('.reset')

let tip = 0;
let billValue = 0;
let numberofppl = 1;

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

function calculate() {
  if (billValue > 0 && numberofppl > 0 && tip > 0) {
    let totalTip = billValue * (tip / 100);          
    let tipEach = totalTip / numberofppl;            
    let totalPerPerson = (billValue + totalTip) / numberofppl; 

    tipamount.textContent = `$${tipEach.toFixed(2)}`;      
    tipperperson.textContent = `$${totalPerPerson.toFixed(2)}`;
  } else {
    tipamount.textContent = "$0.00";
    tipperperson.textContent = "$0.00";
  }
}

buttons.forEach(but => {
  but.addEventListener('click', function () {
    tip = parseInt(but.textContent);
    calculate();
  });
});

peopleinput.addEventListener('input', () => {
  numberofppl = parseInt(peopleinput.value) || 0;

  if (numberofppl === 0) {
    peopleinput.style.border = "2px solid red";  
    errorDiv.style.visibility = "visible";        
  } else {
    peopleinput.style.border = "none";            
    errorDiv.style.visibility = "hidden";         
    calculate();
  }
});

billinput.addEventListener('input', () => {
  billValue = parseFloat(billinput.value) || 0;
  calculate();
});
reset.addEventListener("click", () => {
      tip = 0;
      billValue = 0;
      numberofppl = 1;
      
      billinput.value=""
      peopleinput.value=""
      
      tipamount.textContent = "$0.00";
      tipperperson.textContent = "$0.00";
    
      peopleinput.style.border = "none";
      document.querySelector(".error").style.visibility = "hidden";
    });