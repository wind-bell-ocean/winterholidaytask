$("#submit").on("click",function()
                {
                    var str = $("form").serialize();
                    console.log(str);
                    $.post("doReg.php",{"formData":str},function(data)
                    {
                        if(data=="true")
                        {
                            alert("注册成功!");
                            location = "login.php";
                        }
                        if(data.nickname=="")
                        {
                            alert("昵称缺失，注册失败");
                            return;
                        }
                        if(data.username=="")
                        {
                            alert("用户名缺失，注册失败");
                            return;
                        }
                        if(data.password=="")
                        {
                            alert("密码缺失，注册失败");
                            return;
                        }
                        if(data.sex=="")
                        {
                            alert("性别缺失，注册失败");
                            return;
                        }
                    });
                });
                $("#submit").on("click",function()
                {
                    var str = $("form").serialize();
                    console.log(str);
                    $.post("doLogin.php",{"formData":str},function(data)
                    {
                        if(logindata=="true")
                        {
                            tomessegeboard();
                            location = "index.php?name="+$("input[name='userName']").val();
                        }
                    });
                });