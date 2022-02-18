function calculationCalling(call) {
    const ipnut = document.getElementById(call);
    const ipnutText = ipnut.value;
    const output = parseFloat(ipnutText)
    return output;
}

document.getElementById('calculation-button').addEventListener('click', function () {
    //    calling function
    const incomeInput = calculationCalling('income-input');
    const foodInput = calculationCalling('food-input');
    const rentInput = calculationCalling('rent-input');
    const clothInput = calculationCalling('cloth-input');
    // calculation total expences
    const totalExpences = foodInput + rentInput + clothInput;
    console.log(totalExpences);
    const getExpences = document.getElementById('total-expenses');
    const expencesInText = getExpences.innerText;
    const expences = parseFloat(expencesInText);
    getExpences.innerText = totalExpences;
    // calculating balance
    const balance = incomeInput - totalExpences;
    const getBalance = document.getElementById('balance');
    const getBalanceText = getBalance.innerText;
    const nowBalance = parseFloat(getBalanceText);
    getBalance.innerText = balance;
})


// svaing amount calculation

document.getElementById('save-button').addEventListener('click', function () {
    // gating saving input
    const getSaveInput = document.getElementById('save-input');
    const saveInputText = getSaveInput.value;
    const saveInput = parseFloat(saveInputText);
    // function calling
    const incomeInput = calculationCalling('income-input');
    // save amount calculation
    const saveAmount = (incomeInput * (saveInput / 100));



    // saving amount updating
    const getSavingAmount = document.getElementById('save-amount');
    const savingAmountText = getSavingAmount.innerText;
    const savingAmount = parseFloat(savingAmountText);
    // updating saving amount
    getSavingAmount.innerText = saveAmount;


    //    calling function
    // const incomeInput = calculationCalling('income-input');
    const foodInput = calculationCalling('food-input');
    const rentInput = calculationCalling('rent-input');
    const clothInput = calculationCalling('cloth-input');
    // calculation total expences
    const totalExpences = foodInput + rentInput + clothInput;
    // remaining Balance calcilation
    const remainingBalance = incomeInput - saveAmount - totalExpences;
    const getRemainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceText = getRemainingBalance.innerText;
    const updatedRemainingBalance = parseFloat(remainingBalanceText);
    // updating remaining balance amount
    getRemainingBalance.innerText = remainingBalance;

})
