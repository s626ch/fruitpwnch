// css inject https://stackoverflow.com/questions/15505225/inject-css-stylesheet-as-string-using-javascript
/**
 * Utility function to add replaceable CSS.
 * @param {string} styleString
 */

 const addStyle = (() => {
    const style = document.createElement('style');
    document.head.append(style);
    return (styleString) => style.textContent = styleString;
  })();

// oh my god i need to make sure it doesn't activate when the sign up/login page is visible oh god
if(document.getElementById("signup-container") === null) {
    // list of scam strings, very rudimentary at the moment, please submit messages!!!
    let scamExamples = ['Hey, do you mind reading my offer?'];
    // setup wait function using async/await syntax - https://stackoverflow.com/questions/14226803/wait-5-seconds-before-executing-next-line
    // only including this here if i absolutely need it, do i? i don't know lol
    const delay = ms => new Promise(res => setTimeout(res, ms));
    
    // glass of punch button, this calls the scan function below ---------------------------------------------------------------------------
    // oh also this create element function was taken from Undiscord
    const createElm = (html) => {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.removeChild(temp.firstElementChild);
    }
    
    // create the button
    // using data uri again because i really don't want to bother
    let pwnchIcon
    pwnchIcon = createElm(`<li id="pwnchButton" role="button">
                               <img src="data:image/png;base64,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" width="30px" height="30px" style="margin-top:3.5px;margin-left:0px;" />
                           </li>`);
    
    // -------------------------------------------------------------------------------------------------------------------------------------
    
    // mount the button into discord, this code was taken from Undiscord
    function mountBtn() {
        const toolbar = document.querySelector('div[class^=navbar-right] > ul[class^=nav]');
        if (toolbar) toolbar.appendChild(pwnchIcon);
    }
    
    const observer = new MutationObserver(function (_mutationsList, _observer) {
        if (!document.body.contains(pwnchIcon)) mountBtn(); // re-mount the button to the toolbar
    });
    observer.observe(document.body, { attributes: false, childList: true, subtree: true });
    mountBtn();
    
    // this is to spawn a welcome message upon page load, that's it.
    // set to async to add delay
    const welcomeMsg = async () => {
        // controllable dummy var
        let dummy = false
        // controllable inf loop
        while(dummy === false){
            // constantly check if where the icon is being inserted into exists
            // if it exists and is loaded, then it's ok to spawn a welcome notification, after waiting 2 seconds of course.
            if(document.querySelector('div[class^=navbar-right] > ul[class^=nav]') !== null) {
                await delay(1000);
                spawnNotification("Welcome to fruitpwnch!\nClick the new icon in the top bar\nto check any suspicious messages.", 6005);
                dummy = true;
            }
        }
    }
    welcomeMsg();
    
    // scan visible messages, replace any that match list of scams with a warning.
    pwnchIcon.onclick = function fruitPwnch(zEvent) {
        replaceMessages();
        checkMessages();
    }
    // what does this do? i don't know! but i don't want to remove it because i don't know if it'll break everything!!!!
    document.onmousedown=disableclick;
    function disableclick(event) {
        if(event.button==2) {
            return false;
        }
    }
    
    // allow messages to be replaced before calling the message check, this is better for synchronous work, probably
    function replaceMessages() {
        let knownMessages = document.querySelectorAll('#MessagesInbox > div');
        for (var i = 0; i < knownMessages.length; i++) {
            let stringHandler = knownMessages[i].innerText;
            for(var j=0;j<scamExamples.length;j++){
                if(stringHandler.includes(scamExamples[j]) === true){
                    knownMessages[i].innerHTML = '<div style="background-color: #393b3d;padding:12px;"><span style="color: hsla(0,0%,100%,.7);">This message has been removed by fruitpwnch due to it containing a scam,<br>or something else harmful to you or your computer.</span></div>';
                    knownMessages[i].parentElement.style.curosr = 'unset';
                }
            }
        }
    }
    // this *checks* the messages *after* they've been replaced, to tell the user how many have been replaced
    function checkMessages() {
        let knownMessages = document.querySelectorAll('#MessagesInbox > div');
        let removedMessages = 0
        for (var hh = 0; hh < knownMessages.length; hh++) {
            let stringHandler = knownMessages[hh].innerText;
            let pwnchText = "This message has been removed by fruitpwnch due to it containing a scam,";
            if(stringHandler.includes(pwnchText) === true){
                removedMessages++;
            }
        }
        // check if any notifications already exist and try to circumvent issue with spam click creating blank notifs
        if(document.getElementById("notifContainer") === null){
            spawnNotification("Removed Messages: " + removedMessages, 5005);
        }
    }
    
    function spawnNotification(messageText, deleteTime) {
        // this creates a notification
        var zNode = document.createElement('div');
        zNode.innerHTML = '<span id="notifText"></span>';
        zNode.setAttribute('id','notifContainer','class','row');
        // append notification
        document.body.appendChild(zNode);
        // set notification text to amount of removed messages
        document.getElementById("notifText").innerText = messageText;
        // destroy notification when out of view
        const destroyNode = async () => {
            await delay(deleteTime);
            document.getElementById("notifContainer").remove();
        }
        destroyNode();
    }
    }
    
    // add css styling for this horrendous garbage
    addStyle( `
        #pwnchButton {
            background: none;
            border: none;
            padding: none;
            cursor: pointer;
            margin-left: 6px;
        }
        #pwnchButton img {
            filter: grayscale(1);
            transition: filter 0.15s ease-in-out;
        }
        #pwnchButton img:hover {
            filter: grayscale(0);
        }
        /* notifications use roblox dark styling */
        #notifContainer {
            position: fixed;
            top: 60px;
            right: -256px;
            font-size: 16px;
            line-height: 18px;
            margin: 0px;
            z-index: 1100;
            width: auto;
            text-align: right;
            animation: slideIn 5s ease-in-out forwards;
            color: #bdbebe;
            padding: 10px 20px;
            border-radius: 8px;
            font-family: HCo Gotham SSm,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-shadow: 0 0 8px 0 rgb(0 0 0 / 30%);
            background-color: #191b1d;
            user-select: none;
        }
        @keyframes slideIn {
            0% {
                right: -100%;
            }
            5% {
                right: 16px;
            }
            95% {
                right: 16px;
            }
            100% {
                right: -100%;
            }
        }
    ` );
    
