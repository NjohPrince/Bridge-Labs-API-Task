## BRIDGE-LABS API TASK GUIDE
#

#### [API Documentation Link - Incomplete](https://bridge-labs-api.herokuapp.com/api-docs)
#

#### Tasks

#### `completed => ✔`
#### `uncompleted => X`

- ✔ Uploading files
- ✔ Crud Operations (similar to the previous task)
- ✔ Login, register and logout using OTP
- X Google Auth - In progress
#

### 🎉 <mark>Auth Routes</mark>
#### => Sign Up

✨ `https://bridge-labs-api.herokuapp.com/api/v1/signup`

```javascript
Request body:
    {
        "name": "String",
        "email": "String",
        "password": "String"
    }
```

#### => Login
✨ `https://bridge-labs-api.herokuapp.com/api/v1/verify-otp`

```javascript
Request body:
    {
        "email": "String",
        "otp": "String"
    }
```
#

### 🎉 <mark>Crud Operations with file upload inclusive</mark>

#### => create new post
#### Request type: POST
✨ `https://bridge-labs-api.herokuapp.com/api/v1/post`

```javascript
Request body: form-data
    {
        "name": "String",
        "desc": "String",  // alias description
        "image": fileUpload
    }
```
#

#### => get all posts
#### Request type: GET
✨ `https://bridge-labs-api.herokuapp.com/api/v1/posts`
#

#### => get single post by id
#### Request type: GET
✨ `https://bridge-labs-api.herokuapp.com/api/v1/posts/:id`
#

#### => update post by id
#### Request type: PATCH
✨ `https://bridge-labs-api.herokuapp.com/api/v1/post/update/:id`

```javascript
Request body: form-data
    {
        "name": "String",
        "desc": "String",  // alias description
        "image": fileUpload
    }
```

#### This API was build taking into consideration that at the level of the frontend or service consuming this, will pass down the other fields as they were and change the fields necessary to be updated

#

#### => delete post by id
#### Request type: DELETE
✨ `https://bridge-labs-api.herokuapp.com/api/v1/post/delete/:id`
#
