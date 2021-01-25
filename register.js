window.onload = function () 
{
    var getRequest = new XMLHttpRequest();
    Baseurl = 'http://thungghuan.xyz:3000'
    div1 = document.getElementById('div1')
    getRequest.open('post', Baseurl + '/user');
    getRequest.send(null);
    getRequest.onreadystatechange = function () 
    {
        if (getRequest.readyState == 4) 
        {
            if (getRequest.status == 200) 
            {
                $("#submit").on("click",function()
                {
                    var str = $("form").serialize();
                    console.log(str);
                    $.post("doReg.php",{"formData":str},function(data)
                    {
                        if(data=="true")
                        {
                            alert("注册成功");
                            location = "login";
                        }
                        else
                        {
                            alert("注册失败");
                        }
                    });
                });
                alert(getRequest.responseText)
            }
        }
    }
}