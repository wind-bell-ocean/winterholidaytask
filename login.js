window.onload = function ()
{
    var postRequest = new XMLHttpRequest();
    var Baseurl = '';
    postRequest.open('post', Baseurl + '/login');
    postRequest.setRequestHeader('content-type', 'application/json'); 
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
                            if(data=="true")
                            {
                               location = "index.php?name="+$("input[name='userName']").val();
                            }
                            else
                            {
                                if(data.username=="")
                                { 
                                    alert("用户名缺失！");
                                    return; 
                                }
                                if(data.password=="")
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