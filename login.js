window.onload = function ()
{
    var postRequest = new XMLHttpRequest();
    var Baseurl = 'http://8.129.238.142';
    postRequest.open('post', Baseurl + '/login',true);
    var username = document.getElementById(username);
    var password = document.getElementById(password);
    var logindata = {username:"username",password:"password"};
    postRequest.setRequestHeader('content-type', 'application/json'); 
    postRequest.send(logindata);
    postRequest.onloadchange = function ()
    {
        if (postRequest.readyState == 4) 
        {
            if (postRequest.status == 200) 
            {
                $("#submit").on("click",function()
                {
                    var str = $("form").serialize();
                    console.log(str);
                    $.post("doLogin.php",{"formData":str},function(data)
                    {
                        if(postRequest.status == 402)
                        {
                            alert("用户名或密码错误！")
                        }
                        else
                        {
                            if(logindata=="true")
                            {
                               location = "index.php?name="+$("input[name='userName']").val();
                            }
                            else
                            {
                                if(logindata.username=="")
                                { 
                                    alert("用户名缺失！");
                                    return; 
                                }
                                if(logindata.password=="")
                                { 
                                    alert("密码缺失！");
                                    return;  
                                }
                            }

                        }
                    });
                });
            }
        }
    }
}