let textBox = document.getElementById("textBox");

textBox.addEventListener('input', function(){
    let text = this.value;
    let char = text.length;
    document.getElementById('char').innerHTML = char;

    text = text.trim();
    let words = text.split(" ");

    let cleanList = words.filter(function(el){
        return el != "";
    });
    document.getElementById("word").innerHTML = cleanList.length;
});