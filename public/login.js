var t = 3;
function toMessageBoard(){
  if(t>0){
    document.getElementById("reflect_box").innerHTML= "登录成功！"+ms+"秒后将跳转到留言板...<a href='E:\百步梯学习工作\holidaytask\留言板.html'>直接跳转</a>";
    }
  else{
    window.location.href="E:\百步梯学习工作\holidaytask\留言板.html";
    }
  t--;
}

function fnLogin(){
      var postRequest = new XMLHttpRequest();
      var Baseurl = '/api/wjl';
      postRequest.open('post', Baseurl + '/user',true);
      postRequest.setRequestHeader('content-type', 'application/json'); 
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      if (username.length == 0 || password.length == 0) 
    {
        alert("参数缺失，登录失败");
        return;
    }
      var data = {
        username: username,
        password: password
    }
      postRequest.send(data);
      postRequest.onloadChange = function () {
            if (postRequest.readyState == 4)  {
                if (postRequest.status == 200) {
                  toMessageBoard();
                } 
                else{
                  confirm(postRequest.responseText)
                }
            }
        }
    }