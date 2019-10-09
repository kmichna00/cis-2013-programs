//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff score for pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final homework points (0-30):"));

floatMidPts = parseFloat(prompt("Please enter midterm points"));

floatFinPts = parseFloat(prompt("Please enter final exam points"));

floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);

intGradeOption = parseInt(prompt("Grade type 1 or 2?"));

if(intGradeOption===1)
{
    if (floatTotalPts >=80)
    {
        stringFinalGrade = "Pass";
    }
    else
    {
        stringFinalGrade = "Fail";
    }
    
    alert("Your final grade is: " + stringFinalGrade);
    throw new Error(); //kill switch
}

if(intGradeOption===2)
{
    if (floatTotalPts >= 90 && floatTotalPts <= 100)
    {
        stringFinalGrade = "A";
    }
    if (floatTotalPts >= 80 && floatTotalPts < 90)
    {
        stringFinalGrade = "B";
    }  
    if (floatTotalPts >=70 && floatTotalPts < 80)
    {
        stringFinalGrade = "C";
    }
    if (floatTotalPts >= 60 && floatTotalPts < 70)
    {
        stringFinalGrade = "D";
    }
    if(floatTotalPts < 60)
    {
        stringFinalGrade = "F";
    }
    
    alert("Your final grade is: " + stringFinalGrade);
}
