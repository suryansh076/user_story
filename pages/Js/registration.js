console.log("hwll")
let reload = () => {
    window.reload();
}
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form field values
    const consumerId = document.getElementById('consumerId').value;
    const billNumber = document.getElementById('billNumber').value;
    const title = document.getElementById('title').value;
    const customerName = document.getElementById('customerName').value;
    const email = document.getElementById('email').value;
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    console.log('Consumer ID:', consumerId);
    console.log('Bill Number:', billNumber);
    console.log('Title:', title);
    console.log('Customer Name:', customerName);
    console.log('Email:', email);
    console.log('Country Code:', countryCode);
    console.log('Phone Number:', phoneNumber);
    console.log('User ID:', userId);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log(typeof (consumerId))
    // Assuming values for variables are defined before creating the user object
    if (consumerId.length !== 13) {
        // alert('Consumer ID must be 13 digits long');
        notification('Consumer ID must be 13 digits long')
        return;
    }

    if (consumerId.slice(-5)!== billNumber) {
        // alert('Bill Number should be the last 5 digits of Consumer ID');
        notification('Bill Number should be the last 5 digits of Consumer ID')
        return;
    }

    if (userId.length < 5) {
        // alert('User ID should be a minimum of 5 characters');
        notification('User ID should be a minimum of 5 characters')
        return;
    }

    if (password !== confirmPassword) {
        // alert('Passwords do not match');
        notification('Passwords do not match')
        return;
    }
    let users_detail = JSON.parse(localStorage.getItem('users'));
    if (!users_detail) {
        users_detail = [];
    }
    // users_detail.forEach(function(e,index){
    //     if(e.userId==userId)
    //     {
    //         alert("this user ID is taken try with another one");
    //         return;
    //     }

    
    // })
    for(let i=0;i<users_detail.length;i++)
    {
        if(users_detail[i].userId===userId)
        {
            // alert('User with the same Consumer ID already exists');
            notification('This user ID is already taken try with another one');
        return;
        }
    }
    let user = {
        'consumerId': consumerId,
        'billNumber': billNumber,
        'title': title,
        'customerName': customerName,
        'email': email,
        'countryCode': countryCode,
        'phoneNumber': phoneNumber,
        'userId': userId,
        'password': password,
    };
    users_detail.push(user);
    localStorage.setItem('users', JSON.stringify(users_detail));
    document.getElementById('loginref').style.visibility = 'visible';
    document.getElementById('regiscon').innerHTML=`<p><strong>Customer ID:</strong> <span>${consumerId}</span></p>
    <p><strong>Customer Name:</strong> <span>${customerName}</span></p>
    <p><strong>Email:</strong> <span>${email}</span></p>`
    notification("Registration Success, You can login now")

});

notification=(x)=>
{
    document.getElementById("noti_content").innerText=x;
    document.getElementById("launch").click();
}