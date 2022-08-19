
// Get the Button and add event listener
document.getElementById('btn-deposit').addEventListener('click', function(){

    // Get Deposit input
    //const depositInput = document.getElementById('deposit-input');
    //const newDepositAmount = parseFloat(depositInput.value);
    const newDepositAmount = getInputValueById('deposit-input');

    // Reset deposit value
    //depositInput.value = '';

    // Alert If not a number
    if(isNaN(newDepositAmount) || newDepositAmount < 1 ){
        alert('Insert Valid Number')
        return;
    }
    //

    //Get  Deposit InnerText
    //const depositTotalElement = document.getElementById('deposit-total');
    //const depositTotal = parseFloat(depositTotalElement.innerText);
    // Using a function
    const depositTotal = getElementValueById('deposit-total');
    
    // Calculate new Deposit total
    const newDepositTotal = depositTotal + newDepositAmount;

    // Set inner text value
    //depositTotalElement.innerText = newDepositTotal; 
    //Or
    setTextElementValueById('deposit-total', newDepositTotal);

    //Get Balance Inner Text
    //const balanceTotalElement = document.getElementById('balance-total')
    //const balanceTotal = parseFloat(balanceTotalElement.innerText);
    //Or
    const previousBalanceTotal = getElementValueById('balance-total')
    
    
    //Set new Balance
    const newBalance = previousBalanceTotal + newDepositAmount
    setTextElementValueById('balance-total', newBalance)
})