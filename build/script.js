const billAmount = document.querySelector("#amount");
const people = document.querySelector("#people");
const custom = document.querySelector("#percent");

const tipField = document.querySelector('.tipperperson');
const amountField = document.querySelector('.amountperperson');
const resetBtn = document.querySelector('.reset-button');

people.value = 1;

custom.addEventListener('input',()=>{
    uncheck();
    handleInput();
});

document.querySelectorAll("input[type='radio']").forEach(element => {
    element.addEventListener('input',handleInput);
});

function handleInput() {
    if (!billAmount.value.trim()) {
        return;
      }
      if (!(getPeople() >= 1)) {
        showError(people, true);
        return;
      }
  showError(people, false);
  let checked = document.querySelector('input[type="radio"]:checked');
  let percent;
  if (!checked) {
    if (custom.value.trim()) {
      if (+custom.value > 100 || +custom.value < 0) {
        showError(custom, true);
        return;
      } else {
        showError(custom, false);
        uncheck();
        percent = +custom.value;
      }
    }
    else{
        return;
    }
  } else {
    percent = +checked.dataset.percent;
  }
  let total = +billAmount.value;
  let tip = (percent/100)*total;
  let tipPerPeople = (tip/getPeople()).toFixed(2);
  let billPerPeople = total/getPeople().toFixed(2);
  tipField.textContent = tipPerPeople;
  amountField.textContent = billPerPeople;
}

function getPeople() {
  return +people.value.trim();
}

function showError(element, flag) {
  if (flag) {
    element.classList.add("border-red-400");
  } else {
    element.classList.remove("border-red-400");
  }
}

function uncheck(){
    document.querySelectorAll("input[type='radio']").forEach(element => {
        element.removeAttribute('checked');
        element.checked = false;
    });
}

function reset(){
    let r = confirm("Are you sure you want to reset");
    if(!r){
        return
    }
    people.value = 1;
    billAmount.value = null;
    custom.value = null;
    uncheck();
    tipField.textContent= '0';
    amountField.textContent= '0';
}

billAmount.addEventListener("input", handleInput);
people.addEventListener("input", () => {
  if (!(getPeople() >= 1)) {
    showError(true);
    return;
  }
  showError(false);
  handleInput();
});

resetBtn.addEventListener('click',reset);