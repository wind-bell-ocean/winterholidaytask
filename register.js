window.onload = function () 
{
    var postRequest = new XMLHttpRequest();
    var Baseurl = 'http://8.129.238.142';
    postRequest.open('post', Baseurl + '/user',true);
    var nickname = document.getElementById(nickname);
    var username = document.getElementById(username);
    var password = document.getElementById(password);
    var data = {nickname:"nickname",username:"username",password:"password"};
    postRequest.send(data);
    postRequest.onreadystatechange = function () 
    {
        if (postRequest.readyState == 4) 
        {
            if (postRequest.status == 200) 
            {
                onregister ();
                alert(postRequest.responseText);
            }
            if (this.status != 200) 
            {
                alert( 'error: ' + this.status);
                return;
            }
        }
    }
}

function onregister ()
{
    var isError = true;
    if (nickname.value.length == 0) 
    {
        alert("昵称缺失，注册失败");
        isError = false;
        return;
    }
    if (username.value.length == 0) 
    {
        alert("用户名缺失，注册失败");
        isError = false;
        return;
    }
    if (password.value.length == 0) 
    {
        alert("密码缺失，注册失败");
        isError = false;
        return;
    }
    alert("注册成功！");
}