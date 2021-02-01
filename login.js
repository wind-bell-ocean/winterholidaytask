window.onload = function fnLogin ()
{
    var BaseURL = '';
    var getRequest = new XMLHttpRequest();
    postRequest.open('post', Baseurl + '/login');
    postRequest.setRequestHeader('content-type', 'application/json'); 
    var reflect = document.getElementById("reflect_box")
    var isError = true;
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