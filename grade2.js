var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function () 
{
    var floatHwPts, floatMidPts, floatFinPts, floatTotalPts, intGradeOption, stringFinalGrade;
    
    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat($("mid_pts").value);
    floatFinPts = parseFloat($("fin_pts").value);
    floatTotalPts = parseFloat(floatHwPts + floatMidPts + floatFinPts);
    intGradeOption = parseInt($("grade_option").value);
    stringFinalGrade = "_";//Where do I define this, where does the output go


if(intGradeOption===1) {
    if (floatTotalPts >=80) {
        stringFinalGrade = "Pass";
    }
    else {
        stringFinalGrade = "Fail";
    }
    
    $("final_grade").value = stringFinalGrade;
}

if(intGradeOption===2) {
    if (floatTotalPts >= 90 && floatTotalPts <=100) {
        stringFinalGrade = "A";
       }
    if (floatTotalPts >= 80 && floatTotalPts < 90) {
        stringFinalGrade = "B";
    }
    if (floatTotalPts >=70 && floatTotalPts < 80) {
        stringFinalGrade = "C";
    }
    if (floatTotalPts >= 60 && floatTotalPts < 70) {
        stringFinalGrade = "D";
    }
    if(floatTotalPts <60) {
        stringFinalGrade = "F";
    }

    $("final_grade").value = stringFinalGrade; //How do I get stringFinalGrade into the final grade box
}
};

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};




