if(localStorage.getItem('islogin')==='true')
{
    console.log("hellp")
    document.getElementById('username').innerHTML=`<h4>Hi,${JSON.parse(localStorage.getItem('logedinuser')).customerName}`
    document.getElementById('login_menu').style='display:contents !important'
    document.getElementById('logout_menu').style='display:none !important'
}
else{
    console.log("looooo")
    document.getElementById('login_menu').style='display:none !important'
    document.getElementById('logout_menu').style='display:contents !important'
}
logout=()=>
{
    console.log("logout")
    localStorage.setItem('islogin',false);
}