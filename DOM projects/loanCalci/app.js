document.getElementById('loan-form').addEventListener('submit' , function(e){
    document.getElementById('results').style.display = 'none';

    document.getElementById('loader').style.display = 'block';

    setTimeout(calculate , 3000);

    e.preventDefault();
});

//Calculate the Loan elements
function calculate(e){

    const amount = document.getElementById('amount').value;
    const interestR = document.getElementById('interest').value;
    const months = document.getElementById('months').value;
    const monthlypay = document.getElementById('monthly-payment');
    const totalpay = document.getElementById('total-payment');
    const totali = document.getElementById('total-interest');

    const calI = ((parseFloat(amount)) * (parseFloat(interestR)) * (parseFloat(months)))/100;
    const amtInt = (parseFloat(amount)) + (parseFloat(calI));
    const monpay = amtInt / (parseFloat(months));
    
    if(isFinite(monpay)){
        monthlypay.value = monpay.toFixed(2);
        totalpay.value = amtInt.toFixed(2);
        totali.value = calI.toFixed(2);
        document.getElementById('loader').style.display = 'none';

        document.getElementById('results').style.display = 'block';
    } else {
        error(e);
    }
    e.preventDefault(); 
}  
 


function error(e){
    document.getElementById('loader').style.display = 'none';

    const errorEl = document.createElement('div');
    errorEl.className = 'alert alert-danger';
    const heading = document.querySelector('.heading');


    errorEl.appendChild(document.createTextNode('Please Check Your Numbers'));

    document.querySelector('.card').insertBefore(errorEl, heading);

    setTimeout(clearError , 3000);

    e.preventDefault();
}

function clearError(){
    document.querySelector('.alert').remove();
}

