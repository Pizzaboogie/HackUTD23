
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

    var formValues = {
        INCOME: income,
        MORTGAGE: mortgage,
        CREDIT: credit,
        CAR: car,
        STUDENT: student,
        CREDITC: creditC,
        APPRAISED: appraised,
        DOWN: down
    };
    return formValues;
    // Create an object with the form values
    

    
}


function printval(formValues){
    console.log("sai sucks")
    var valuesJson=JSON.stringify(formValues);
    console.log(valuesJson);
    var blob = new Blob([valuesJson], {type:"application/json"});

// Create a link element
var downloadLink = document.createElement('a');

// Create a downloadable link for the JSON file
downloadLink.href = URL.createObjectURL(blob);
downloadLink.download = "data.json";

// Append the link to the body
document.body.appendChild(downloadLink);

// Simulate a click to start the download
downloadLink.click();

// Remove the link from the body
document.body.removeChild(downloadLink);
}


// Create a blob object representing the data as a JSON



