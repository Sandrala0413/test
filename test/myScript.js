//密碼隱藏顯示
function hideShowPsw(){
    var img = document.getElementById('eye');
    var input = document.getElementById('input_invisible');
    if(input.type === 'password'){
        img.className = 'fa-solid fa-eye';
        input.setAttribute('type', 'text');
    }
    else{
        img.className = 'fa-regular fa-eye-slash';
        input.setAttribute('type', 'password');
    }
}


//隨機產生驗證碼
var captchaText;
function generateVerify() {
    var canvas = document.getElementById("captchaCanvas");
    var ctx = canvas.getContext("2d");
    

    // 刪除之前的驗證碼
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 隨機產生
    captchaText = "";
    var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
        captchaText += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }

    // 畫出canvas
    ctx.font = "italic 25px Arial";
    ctx.fillStyle = "#ffffff98";
    ctx.fillText(captchaText, 10, 30);

    // 隨機畫干擾線
    for (var i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.strokeStyle = "#ddd";
        ctx.stroke();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    generateVerify();
});     //監聽網頁被加載時執行


//檢查提交內容
function signUp(){
    var account = document.getElementById('account').value;
    var password = document.getElementById('input_invisible').value;
    var verify = document.getElementById('captchaInput').value;

    if(account === 'admin' && password === '1234' && verify === captchaText){
        var newWindow = window.open("./logInSuccess.html", "_blank");   //在新窗口打開新頁面
        newWindow.focus();      //聚焦在跳轉的新頁面
    }
    else if(account !== 'admin' || password !== '1234'){
        alert('Error Account or Password');
    }
    else{
        alert('Error Verify')
    }
}

//重置
function reset(){
    document.getElementById('account').value = "";
    document.getElementById('input_invisible').value = "";
    document.getElementById('captchaInput').value = "";
}
