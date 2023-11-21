document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("suryansh")
    let user=document.getElementById('username').value
    let pass=document.getElementById('password').value
    console.log(user,pass)
    let user_detail=JSON.parse(localStorage.getItem('users'))
    for(let i=0;i<user_detail.length;i++)
    {
        if((user_detail[i].userId===user)&&(user_detail[i].password===pass))
        {
            alert("loggedin")
            localStorage.setItem('islogin',true);
            localStorage.setItem('logedinuser',JSON.stringify(user_detail[i]));
            window.location.href="home.html"
            return;
        }
    }
    alert("Invalid User ID/password")
});