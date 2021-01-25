window.onload = function ()
{
    getData();    
    var userName = '<?php echo isset($_GET["name"])?$_GET["name"]:"null"; ?>';
    if(userName=="null")
    {
        location = "留言板.php";
        $("#submit").on("click",function()
        {
            alert("请先登录再发表留言！")
            return;
        })
    } 
    else
    {
        $("#div1").html("欢迎您，<span style='color:red;'>"+userName+"</span>");    
        $("#submit").on("click",function()
        {
           var content = $("#note").val();
           if(content=="")
            {
              alert("留言内容不能为空，请核对！");
              return;
            }
            var nickname = document.getElementById("nickname");
            var time = getTime();
            var note = 
            {
               "userName":userName,
               "time":time,
               "content":content
            }       
            $.post("doAdd.php",note,function(data)
            {
               if(data=="true")
               {
                  alert("留言内容提交成功！");
                  location.reload(true);
                  var text = document.querySelector('textarea');
                  var btn = document.querySelector('button');
                  var ul = document.querySelector('ul');
                  btn.onclick = function () 
                    {
                        var li = document.createElement('li');
                        if (text.value == '')
                        {
                          alert('您没有输入内容')
                        } 
                        else 
                        {
                           li.innerHTML = text.value + <br/> + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + note.nickname + note.time;
                           ul.insertBefore(li, ul.children[0]); 
                        }
                        var removeBtn = document.querySelectorAll('a');
                        for (var i = 0; i < removeBtn.length; i++) 
                        {
                           removeBtn[i].onclick = function () 
                           {
                             ul.removeChild(this.parentNode);
                           }
                        }
                    }
                }
                else
                {
                    alert("留言失败！原因不明！");
                }
            });
        });
    }
}  
    
function getData()
{
    postRequest.open('post', Baseurl + '/guestbook');
    postRequest.setRequestHeader('content-type', 'application/json');
    postRequest.send(JSON.stringify(Data));
    postRequest.onreadystatechange = function () 
    {
        if (postRequest.readyState == 4)
        {
            if (postRequest.status == 200) 
            {
                $.post("doShowNote.php",function(data)
                {
                    var arr = data.split("[;]");
                    arr.pop();
                    console.log(arr);
                    for (var i=0;i< arr.length;i++) 
                    {
                        var thisNote = $.parseJSON(arr[i]);
                        var div = "<br/><div id='div"+i+"'>用户名："+thisNote.userName+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布时间："+thisNote.time+"<br/><br/> 留言内容："+thisNote.noteVal+"</div><br/><hr>"
                        $("#liuyanban").prepend(div);
                    };
                });
            }
        }
    }
}

function getTime()
{
    var today  = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var date1  = today.getDate();
    var hours = today.getHours();
    var minutes = today.getMinutes()<10?"0"+today.getMinutes():today.getMinutes();
    var seconds = today.getSeconds()<10?"0"+today.getSeconds():today.getSeconds();
    var dateTime = year+"年"+(month+1)+"月"+date1+"日"+hours+":"+minutes+":"+seconds;    
    return dateTime;
}