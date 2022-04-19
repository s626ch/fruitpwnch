knownMessages = document.getElementsByClassName("message-2CShn3");
let scamExamples = ['Discord Nitro for Free - Steam Store', 'Discord nitro distribution', 'Discord Nitro for Free', ' https://dlscordgived.xyz/', 'https://discord-app.net/', 'BTC charity draw', 'You are one of the lucky winners of our giveaway', 'Crypto Discord Channels', 'Giveaway News! Congratulations!', 'Free distribution of discord nitro', 'best pump signals', 'the right strategies for making money', 'she made ur dick hard... join back', 'https://discrde.gift/', 'can you test my game?', 'GameTest.rar', 'i made a game (like terraria) can you test?'];

for (var i = 0; i < knownMessages.length; i++) {
    // console.log(knownMessages[i].innerText);
    let stringHandler = knownMessages[i].innerText;
    for(var j=0;j<scamExamples.length;j++){
        if(stringHandler.includes(scamExamples[j]) === true){
            knownMessages[i].innerHTML = '<div style="background-color:rgba(255,255,0,0.15);padding:12px;border-radius:8px;"><span style="color:var(--text-normal);">This message has been removed by FruitPwnch due to it containing a scam,<br>or something else harmful to you or your computer.</span></div>';
        }
    }
}
