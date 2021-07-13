player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn- "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn- "+player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();

    console.log("Word in lower case"+word);
    
    c1 = word.charAt(1);
    console.log(c1);
    
    half_length = Math.floor(word.length/2);
    c2 = word.charAt(half_length);
    console.log(c2);

    length_1 = word.length-1;
    c3 = word.charAt(length_1);
    console.log(c3);

    remove_c1 = word.replace(c1, "_");
    remove_c2 = remove_c1.replace(c2, "_");
    remove_c3 = remove_c2.replace(c3, "_");

    console.log(remove_c3);

    question_word = "<h4 id='word_display'>Q. "+remove_c3+"</h4>";
    input_box = "<br>answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row = question_word+input_box+check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
