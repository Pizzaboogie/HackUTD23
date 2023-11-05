import pickle
import numpy as np
from sklearn.linear_model import LinearRegression

def calcScores(val):
    income = val[0]
    debt = val[1] + val[2] + val[3] + val[7]
    CREDIT = val[-1]
    LTV = val[6]/val[4]
    DTI = debt/income
    FEDTI = val[7]/income
    point = 0

    if(CREDIT>=640):
        credit_point = (CREDIT*0.25)/850 #850 is the max credit score

    if(0.80>LTV):
        ltv_point = 0.25

    if(0.80<=LTV<0.85):
        ltv_point = 0.2

    
    if(0.85<=LTV<0.90):
        ltv_point = 0.15

    if(0.90<=LTV<0.95):
        ltv_point = 0.1

    
    if(LTV>=0.95):
        ltv_point = (1.0-LTV)*0.1

    
    if(0 <=DTI <= 0.43):
        dti_point = ((0.43-DTI)/0.43)*0.1+ 0.15

    else:
        dti_point= 0.1 * ((1-DTI))

    if(0<=FEDTI<=0.28):
        fedti_points = (0.15 + ((0.28-FEDTI)/0.28)*0.1)
    else:
        fedti_points = 0.1 * ((1-FEDTI))
    

    return [credit_point,ltv_point,dti_point,fedti_points]

def predict(val):
    # val = [income, creditCard, carPayment, studentLoans, appraisedValue, downPayment, loanAmount, mortagage, creditScore]
    # debt
    income = val[0]
    debt = val[1] + val[2] + val[3] + val[7]
    CREDIT = val[-1]
    LTV = val[6]/val[4]
    DTI = debt/income
    FEDTI = val[7]/income

    processedVal = [[CREDIT,LTV, DTI, FEDTI]]
    file = open("model.sav","rb")
    model = pickle.load(file)
    return model.predict(processedVal)