var ms = 5;
function returnlogin()
{
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
window.onload = function () 
{
    var postRequest = new XMLHttpRequest();
    var Baseurl = 'http://8.129.238.142';
    postRequest.open('post', Baseurl + '/user',true);
    var nickname = document.getElementById("nickname");
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var data = {nickname:"nickname",username:"username",password:"password"};
    postRequest.setRequestHeader('content-type', 'application/json'); 
    postRequest.send(data);
    postRequest.onreadystatechange = function () 
    {
        if (postRequest.readyState == 4) 
        {
            if (postRequest.status == 200) 
            {
                alert(postRequest.responseText);
                setInterval(returnLogin,1000);
                returnlogin(); 
            }
            if (this.status != 200) 
            {
                alert( 'error: ' + this.status);
                return;
            }
        }
    }
    var 
}

function onregister ()
{
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