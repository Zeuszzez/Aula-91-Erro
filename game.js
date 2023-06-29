function enviar(){
    var get_word = document.getElementById("word").ariaValueMax;
    var word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word);

    chatAti1 = word.charAt(1);
    console.log(charAt1);

    lenght_divide_2 = Math.floor(word.lenght/2);
    charAt2 = word.charAt(lenght_divide_2);
    console.log(charAt2);

    lenght_minus_1 = word.length - 1;
    charAt3 = word.charAt(lenght_minus_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_")
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";
    input_box =  "<br>Resposta : <input type='text' id='input_check_box'>";
    check_button = "<button class='btn btn-info' onclick='check()'>Checar</button>"
    row = question_word + input_box + check_button ;
    document.getElementById("saida").innerHTML = row;
document.getElementById("word").value = "";
}