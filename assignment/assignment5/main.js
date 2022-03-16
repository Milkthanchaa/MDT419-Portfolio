// var topic1 = document.getElementById("topic1");
// var comment1 = document.getElementById("comment1");
// var comment2 = document.getElementById("comment2");
// var text1 = document.getElementById("text1").value;
function postFunction() {
    var topic1 = document.getElementById("topic1");
    var comment1 = document.getElementById("comment1");
    var comment2 = document.getElementById("comment2");
    var text1 = document.getElementById("text1").value;
    if (topic1.innerText == "") {
        topic1.innerText = text1;
    }
    else if (comment1.innerText == "") {
        comment1.innerText = text1;

    }
    else if (comment2.innerText == "") {
        comment2.innerText = text1;
    }
}
function clearFunction() {
    topic1.textContent = "";
    comment1.textContent = "";
    comment2.textContent = "";
}