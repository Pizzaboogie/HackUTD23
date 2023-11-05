import test
import json

inputFile = open("GUI\\data2.json",'r')
outputFile = open("GUI\\output.json",'w+')

data = json.load(inputFile)

income = float(data["INCOME"])
mortgage = float(data["MORTGAGE"])
credit = float(data["CREDIT"])
car = float(data["CAR"])
student = float(data["STUDENT"])
creditc = float(data["CREDITC"])
appraised = float(data["APPRAISED"])
loan = float(data["LOAN"])
down = float(data["DOWN"])

val = [income, creditc, car, student, appraised, down, loan, mortgage,credit]

userPoints = test.predict(val)
pointScale = test.calcScores(val)

if(userPoints > 0.4):
    approved = "yes"
else:
    approved = "no"

dictionary = {
    "approved" : approved,
    "userPoints" : int(userPoints[0]*100),
    "creditPoint" : pointScale[0],
    "ltvPoint" : pointScale[1],
    "dtiPoint" : pointScale[2],
    "fedtiPoint" : pointScale[3]
}
json_object = json.dumps(dictionary)
outputFile.write(json_object)

