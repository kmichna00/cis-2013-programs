var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
    floatAge = parseFloat(prompt("Enter your age"));
    floatDays = floatAge * 365.25; /*This program will calculate floatDays by multiplying age by 365.25*/
    floatMonths = floatAge * 12; /*This program will calculate floatMonths by multiplying age by 12*/
    intWeeks = floatDays / 7; /*This program will calculate intWeeks by dividing age by 12*/
    intFortnights = floatDays / 14; /*This program will calculate intFortnights by dividing age by 12*/
    alert("You entered age = " + floatAge + 
          "\n Your age in days is = " + floatDays +
          "\n Your age in months is = " + floatMonths +
          "\n Your age in weeks is = " + intWeeks +
          "\n Your age in fortnights is = " + intFortnights ); /*This output tells the user their age in different measures*/
        
