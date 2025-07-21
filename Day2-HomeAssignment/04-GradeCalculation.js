/* JavaScript function that evaluates a student's score and returns their grade using a switch statement 
to assess score ranges. */
function gradeCalculation(score){
    switch(true){
        case score>90 && score<=100:
            console.log(" Grade scored : A+");
            break;
        case score>80 && score<=90:
            console.log(" Grade scored : A");
            break
        case score>70 && score<=80:
            console.log(" Grade scored : B+");
            break;
        case score>60 && score<=70:
            console.log(" Grade scored : B");
            break;
        case score>50 && score<=60:
            console.log(" Grade scored : C+");
            break;
        case score>40 && score<=50:
            console.log(" Grade scored : C");
            break;
        case score>32 && score<=40:
            console.log(" Grade scored : D");
            break;
        case score>20 && score<=32:
            console.log(" Grade scored : E");
            break;
        case score>=0 && score<=20:
            console.log(" Grade scored : F");
            break;
        default:
            console.log("Invalid Input");

    }
}
gradeCalculation(92);
gradeCalculation(80);
gradeCalculation(74);
gradeCalculation(60);
gradeCalculation(59);
gradeCalculation(44);
gradeCalculation(33);
gradeCalculation(32);
gradeCalculation(23);
gradeCalculation(0);
gradeCalculation(9);