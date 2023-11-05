document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('msform');
    const fieldsets = Array.from(form.getElementsByTagName('fieldset'));
    const calcButton = form.querySelector('input[name="calc"]');
    
    
    let currentFieldsetIndex = 0;

    calcButton.addEventListener('click', (event) => {
        event.preventDefault();
        getVal();
        // Hide current fieldset
        fieldsets[currentFieldsetIndex].style.display = 'none';
        currentFieldsetIndex++;
        // Show next fieldset
        
        if (currentFieldsetIndex < fieldsets.length) {
            fieldsets[currentFieldsetIndex].style.display = 'block';
        }
    });
});

function getVal() {
    const income = document.getElementById('income').value;
    const mortgage = document.getElementById('mortgage').value;
    const credit = document.getElementById('credit').value;
    const car = document.getElementById('car').value;
    const student = document.getElementById('student').value;
    const creditC = document.getElementById('creditC').value;
    const appraised = document.getElementById('appraised').value;
    const down = document.getElementById('down').value;
    console.log(income);

    // Create an object with the form values
    const formValues = {
        INCOME: income,
        MORTGAGE: mortgage,
        CREDIT: credit,
        CAR: car,
        STUDENT: student,
        CREDITC: creditC,
        APPRAISED: appraised,
        DOWN: down
    };
}

