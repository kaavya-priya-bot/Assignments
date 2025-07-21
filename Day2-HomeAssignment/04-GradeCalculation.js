/* JavaScript function that evaluates a student's score and returns their grade using a switch statement 
to assess score ranges. */
function gradeCalculation(score){
    switch(true){
        case score>90 && score<=100:
            return "A+";
            break;
        case score>80 && score<=90:
            return "A";
            break
        case score>70 && score<=80:
            return "B+";
            break;
        case score>60 && score<=70:
            return "B";
            break;
        case score>50 && score<=60:
            return "C+";
            break;
        case score>40 && score<=50:
            return "C";
            break;
        case score>32 && score<=40:
            return "D";
            break;
        case score>20 && score<=32:
            return "E";
            break;
        case score>=0 && score<=20:
            return "F";
            break;
        default:
            console.log("Invalid Input");

    }
}

console.log("Grade scored: "+gradeCalculation(92));
console.log("Grade scored: "+gradeCalculation(80));
console.log("Grade scored: "+gradeCalculation(74));
console.log("Grade scored: "+gradeCalculation(60));
console.log("Grade scored: "+gradeCalculation(59));
console.log("Grade scored: "+gradeCalculation(44));
console.log("Grade scored: "+gradeCalculation(33));
console.log("Grade scored: "+gradeCalculation(23));
console.log("Grade scored: "+gradeCalculation(0));
console.log("Grade scored: "+gradeCalculation(9));

