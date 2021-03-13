var t = 3;
function toMessageBoard()
{
    if(t>0)
    {
        document.getElementById("reflect_box").innerHTML= "登录成功！"+ms+"秒后将跳转到留言板...<a href='E:\百步梯学习工作\holidaytask\留言板.html'>直接跳转</a>";
    }
    else
    {
        window.location.href="E:\百步梯学习工作\holidaytask\留言板.html";
    }
    t--;
}

function fnlogin()
{
    var postRequest = new XMLHttpRequest();
    var Baseurl = 'http://8.129.238.142';
    postRequest.open('post', Baseurl + '/login',true);
    postRequest.setRequestHeader('content-type', 'application/json'); 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var data = "username"+username+"password"+password;
    postRequest.send(data);
    postRequest.onloadChange = function ()
    {
        if (postRequest.readyState == 4) 
        {
            if(postRequest.status == 402)
            {
                alert("用户名或密码错误！")
                return;
            }
            if (postRequest.status == 200) 
            {
                tomessegeboard();
            } 
        }
    }
}