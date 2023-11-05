import test
import json

inputFile = json.load("input.json","r")
outputFile = json.load("output.json","w")

data = inputFile.load(inputFile)

val = [data["GrossMonthlyIncome"],data["CreditCardPayment"],data["StudentLoanPayments"],data["AppraisedValue"],data["DownPayment"],data["LoanAmount"],data["MonthlyMortgagePayment"],data["CreditScore"]]

point_vals = test.calcScores(val)
if(test.predict(val) > 0.5):
    approved = "yes"
else:
    approved = "no"

json.dump(outputFile, {"val": approved})

