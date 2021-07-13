function getScore(){
    var score = localStorage.getItem("score");
    document.getElementById("update").innerHTML = "<h1>score: "+score+"</h1>";
}

function back(){
    window.location = "activity_1.html";
}