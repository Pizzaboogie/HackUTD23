


document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('msform');
    const fieldsets = Array.from(form.getElementsByTagName('fieldset'));
    const calcButton = form.querySelector('input[name="calc"]');
    
    
    let currentFieldsetIndex = 0;

    calcButton.addEventListener('click', (event) => {
        event.preventDefault();
        var jsonvals=getVal();
        printval(jsonvals);
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
    var income = document.getElementById('income').value;
    var mortgage = document.getElementById('mortgage').value;
    var credit = document.getElementById('credit').value;
    var car = document.getElementById('car').value;
    var student = document.getElementById('student').value;
    var creditC = document.getElementById('creditC').value;
    var appraised = document.getElementById('appraised').value;
    var down = document.getElementById('down').value;
    var loan=document.getElementById('loan').value;

    var formValues = {
        INCOME: income,
        MORTGAGE: mortgage,
        CREDIT: credit,
        CAR: car,
        STUDENT: student,
        CREDITC: creditC,
        APPRAISED: appraised,
        DOWN: down,
        LOAN: loan
    };
    return formValues;
    // Create an object with the form values
    

}


function printval(formValues){
    console.log("sai sucks")
    var valuesJson=JSON.stringify(formValues);
    console.log(valuesJson);



var url = 'http://127.0.0.1:3000/valuesJson';

// Use fetch to send the POST request
fetch(url, {
  method: 'POST', // Specify the method
  headers: {
    'Content-Type': 'application/json' // Set the content type to JSON
  },
  body: valuesJson // Convert the JSON object to a string
})
.then(response => response.json())
.then(valuesJson => console.log(valuesJson))
.catch((error) => {
  console.error('Error:', error);
});
}

