knownMessages = document.getElementsByClassName("message-2CShn3");
let scamExamples = ['Discord Nitro for Free - Steam Store', 'Discord nitro distribution', 'Discord Nitro for Free', ' https://dlscordgived.xyz/', 'https://discord-app.net/'];

for (var i = 0; i < knownMessages.length; i++) {
    // console.log(knownMessages[i].innerText);
    let stringHandler = knownMessages[i].innerText;
    for(var j=0;j<scamExamples.length;j++){
        if(stringHandler.includes(scamExamples[j]) === true){
            knownMessages[i].innerHTML = '<span style="color:var(--text-normal);background-color:rgba(255,255,0,0.15);padding:12px;border-radius:8px;">This message has been removed by FruitPwnch.</span>';
        }
    }
}