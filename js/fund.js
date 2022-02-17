function calculationCalling(call) {
    const ipnutIncome = document.getElementById(call);
    const ipnutIncomeText = ipnutIncome.value;
    const inceme = parseFloat(ipnutIncomeText)
    console.log(inceme);
    return inceme;
}

document.getElementById('calculation-button').addEventListener('click', function () {
    const incomeInput = calculationCalling('income-input');
    const foodInput = calculationCalling('food-input');
    const rentInput = calculationCalling('rent-input');
    const clothInput = calculationCalling('cloth-input');
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