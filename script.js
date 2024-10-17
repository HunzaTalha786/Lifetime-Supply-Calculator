function calculate() {
    let productName = document.getElementById("item").value.trim();
    let currentAge = parseInt(document.getElementById('currentAge').value);
    let maxAge = parseInt(document.getElementById('maxAge').value);
    let consumption = parseInt(document.getElementById('consumption').value);
    let resultElement = document.getElementById('result');
    let message;
    let total;

    if (!productName || isNaN(currentAge) || isNaN(maxAge) || isNaN(consumption)) {
        message = `Fill the above input!`;
    } 

    else if(currentAge < 0 || maxAge <= currentAge || consumption <= 0){
        message=`Fill the correct information!`
    }
    else {
        total = (maxAge - currentAge) * consumption;
        message = `You will need ${total} ${productName} to last you until the ripe old age of ${maxAge}.`;
    }
    
    resultElement.innerHTML = message;
}

function reset() {
    document.getElementById("item").value = '';
    document.getElementById('currentAge').value = '';
    document.getElementById('maxAge').value = '';
    document.getElementById('consumption').value = '';
    document.getElementById('result').innerHTML = '';
}