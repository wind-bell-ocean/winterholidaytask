var ms = 5;
function returnLogin(){
    if(ms>0)
    {
        document.getElementById("but_regist").innerHTML= "注册成功！"+ms+"秒后将跳转到登录界面...<a href='E:\百步梯学习工作\holidaytask\login.html'>直接跳转</a>";
    }
    else
    {
        window.location.href="E:\百步梯学习工作\holidaytask\login.html";
    }
    ms--;
}

function regist() {
    var postRequest = new XMLHttpRequest();
    var Baseurl = 'http://127.0.0.1:5000';
    postRequest.open('post', Baseurl + '/user',true);
    var nickname = document.getElementById("nickname").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var data = "nickname"+nickname+"username"+username+"password"+password;
    postRequest.setRequestHeader('content-type', 'application/json'); 
    postRequest.send(data);
    postRequest.onreadystatechange = function () {
        if (postRequest.readyState == 4) 
        {
            onRegister();
            if (postRequest.status == 200) 
            {
                returnLogin(); 
            }
            if (this.status != 200) 
            {
               confirm(postRequest.responseText)
            }
        }
    }
}

function onRegister (){
    if (nickname.value.length == 0) 
    {
        alert("昵称缺失，注册失败");
    }
    if (username.value.length == 0) 
    {
        alert("用户名缺失，注册失败");
    }
    if (password.value.length == 0) 
    {
        alert("密码缺失，注册失败");
    }
}