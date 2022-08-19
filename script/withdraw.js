document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Get Withdraw input
    const newWithdrawAmount = getInputValueById('withdraw-input');

    // Alert If not a number
    if(isNaN(newWithdrawAmount) || newWithdrawAmount < 1 ){
        alert('Insert Valid Number')
        return;
    }
    //

    //Get  Withdraw InnerText
    const previousWithdrawTotal = getElementValueById('withdraw-total');
    
    //Get Balance InnerText
    const balanceTotal = getElementValueById('balance-total');

    // If balance less than 0
    if(newWithdrawAmount > balanceTotal){
        alert('Eto taka to nai vai')
        return
    }


    // Calculate new Withdraw total
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal)

    
    

    //Set new Balance
    const newBalance = balanceTotal - newWithdrawAmount
    setTextElementValueById('balance-total', newBalance)
})