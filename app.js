function checked(){
    var score = 0;
    var right_answer_1 = document.getElementById("q1-a2");
    var answer2 = document.getElementById("q1-a1");
    var answer3 = document.getElementById("q1-a3");
    if(right_answer_1.checked == true){
        score++
        alert("Congratulation your answer: 1 is right")
    }
    else{
        alert("Your answer: 1 is wrong")
    }
    

    var right_answer_2 = document.getElementById("q2-a1");
    var answerr1 = document.getElementById("q2-a2");
    var answerr2 = document.getElementById("q2-a3");
    if(right_answer_2.checked==true){
        score++
        alert("Congratulation your answer: 3 is right")
    }
    else{
        alert("Your answer: 3 is wrong")
    }

    var right_answer_3 = document.getElementById("q3-a3");
    var answerrr1 = document.getElementById("q3-a2");
    var answerrr2 = document.getElementById("q3-a1");
    if(right_answer_3.checked==true){
        score++
        alert("Congratulation your answer: 4 is right")
    }
    else{
        alert("Your answer: 4 is wrong");
    }

    var right_answer_4 = document.getElementById("q4-a3");
    var answerrrr1 = document.getElementById("q4-a2");
    var answerrrr2 = document.getElementById("q4-a1");
    if(right_answer_4.checked==true){
        score++
        alert("Congratulation your answer: 5 is right")
    }
    else{
        ("Your answer: 5 is wrong" )
    }

    var right_answer_5 = document.getElementById("q5-a1");
    var answerrrrr1 = document.getElementById("q5-a2");
    var answerrrrr2 = document.getElementById("q5-a3");
    if(right_answer_5.checked==true){
        alert("Congratulation your answer: 2 is right")
        score++
    }
    else{
       alert ("your answer: 2 is wrong")
    }


    alert("Youre score is: " + score++)
}
