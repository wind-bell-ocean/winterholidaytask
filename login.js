window.onload = function login ()
{
    var getRequest = new XMLHttpRequest();
    Baseurl = 'http://thungghuan.xyz:3000';
    postRequest.open('post', Baseurl + '/session');
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
                                  { alert("用户名缺失！") }
                                if(data.password=="")
                                  { alert("密码缺失！") }
                            }

                        }
                    });
                });
            }
        }
    }
}