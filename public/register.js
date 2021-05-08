var ms = 5;
function returnLogin(){
    if (ms>0) {
        document.getElementById("but_regist").innerHTML= "注册成功！"+ms+"秒后将跳转到登录界面...<a href='E:\百步梯学习工作\holidaytask\login.html'>直接跳转</a>";
    }
    else {
        window.location.href="E:\百步梯学习工作\holidaytask\login.html";
    }
    ms--;
}

function onRegister() {
    var postRequest = new XMLHttpRequest();
    var Baseurl = 'api/wjl';
    postRequest.open('post', Baseurl + '/user',true);
    var nickname = document.getElementById("nickname").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var sexRatio = document.getElementsByName('sex')
    var sex = 0
    for (let i in sexRatio) {
        if (sexRatio[i].checked) {
            sex = sexRatio[i].value
        }
    }
    if (nickname.length == 0 || username.length == 0 || password.length == 0 || sex == 0) 
    {
        alert("参数缺失，注册失败");
        return;
    }
    // var data = "?nickname"+nickname+"&username"+username+"&password"+password;
    var data = {
        nickname: nickname,
        username: username,
        password: password,
        sex: sex
    }
    postRequest.setRequestHeader('content-type', 'application/json'); 
    postRequest.send(data);
    postRequest.onreadystatechange = function () {
        if (postRequest.readyState == 4) 
        {
            if (postRequest.status == 200) 
            {
                returnLogin(); 
            }
            else
            {
               confirm(postRequest.responseText)
            }
        }
    }
}

// function onRegister (){
//     if (nickname.value.length == 0) 
//     {
//         alert("昵称缺失，注册失败");
//     }
//     if (username.value.length == 0) 
//     {
//         alert("用户名缺失，注册失败");
//     }
//     if (password.value.length == 0) 
//     {
//         alert("密码缺失，注册失败");
//     }
// }