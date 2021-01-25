# 留言板任务接口     



## 留言板页面（GET）

接口（‘/’）

后端返回：board，json格式

包含参数{

'content_id':int,

'content':string,

'username":string

"nickname": string
"content": string
"post_time":timestamp
"last_correct":timestamp
}

无数据时返回“null”





## 全局错误码

`401`:未登录

### 错误返回格式

```
{
	"status": 401
	"message": "请先登录"，
	"data": null
}
```



## 写留言（post）

接口（’/guestbook‘）

需前端返回数据（json格式）{content；

}

返回“发表成功”

## 改留言（put）

接口（/guestbook/content）

需前端返回参数（json格式）{content_id,content

}

返回’修改成功‘

## 删留言（DELETE）

接口（/guestbook/deletion）

需前端返回数据（josn格式）{content_id,

}

返回“删除成功”





# 个人注册

/user

## 注册接口

```
POST /user
```

请求参数

```
{
	"username": string
	"password": string
	'sex':string
	'nickname':string
}
```

响应参数

**成功时：**

```
{
	"status": 200
	"msg": "注册成功"
}
```

**失败时：**

```
HTTP/1.1 400 Bad Request
1. 缺少参数 username

2. 缺少参数 nickname

3. 缺少参数 password
   缺少参数 sex

4. username参数已存在
```



## 个人信息（GET）

接口（/me）

返回{

"username": string
	"password": string
	'sex':string
	'nickname':string

}

## 登录接口

```
POST /login
```

**请求参数**

```
{
	"username": string
	"password": string
}
```

**响应参数**

```
{
	"status": 200
	"msg": "登陆成功"
	“data”: {"username":"password"}
}
```

**失败：**

{

status：“402”

msg：“用户名或密码错误”

}

## 修改用户名（PUT）

接口（/users/username）

需要前端数据（json）{

username2：string

}

失败时{status：400

msg：“用户名已存在”

}

返回“修改用户名成功”

## 修改密码(PUT)

接口（/users/password）

需要前端数据（json）{

password：string

}

返回“修改密码成功”



