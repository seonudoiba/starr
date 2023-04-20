let Rot = [
    {lett: "_" , conv: ' '},
    {lett: "A" , conv: 'N'},
    {lett: "B" , conv: 'O'},
    {lett: "!" , conv: '!'},
    {lett: "?" , conv: '?'},
    {lett: "." , conv: '.'},
    {lett: "C" , conv: 'P'},
    {lett: "D" , conv: 'Q'},
    {lett: "E" , conv: 'R'},
    {lett: "F" , conv: 'S'},
    {lett: "G" , conv: 'T'},
    {lett: "H" , conv: 'U'},
    {lett: "I" , conv: 'V'},
    {lett: "J" , conv: 'W'},
    {lett: "K" , conv: 'X'},
    {lett: "L" , conv: 'Y'},
    {lett: "M" , conv: 'Z'},
    {lett: "N" , conv: 'A'},
    {lett: "O" , conv: 'B'},
    {lett: "P" , conv: 'C'},
    {lett: "Q" , conv: 'D'},
    {lett: "R" , conv: 'E'},
    {lett: "S" , conv: 'F'},
    {lett: "T" , conv: 'G'},
    {lett: "U" , conv: 'H'},
    {lett: "V" , conv: 'I'},
    {lett: "W" , conv: 'J'},
    {lett: "X" , conv: 'K'},
    {lett: "Y" , conv: 'L'},
    {lett: "Z" , conv: 'M'},
    
];

// ASSUMING .FREE CODE,

function convert(inputWords){
    let inputletter = inputWords.replace(/ /g, "_").toUpperCase;
    let newText ="";
    // inputletter is 'FREE_CODE'
    for(let i = 0; i < inputWords.length; i++){
        for(let j = 0; j < Rot.length; j++){
            if(inputletter.charAt(i) == Rot[j].lett){
                // F === F
               // ChangedText = 
               newText = newText + Rot[j].conv;
            }
        }
        
    }
    document.getElementById("Output").value = newText;
};


document.getElementById("con").addEventListener("click",function() {
    var inputWords = document.getElementById('Input').value;
    convert(inputWords);
});
