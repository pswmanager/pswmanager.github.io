function pswVisibility(e){
    e.preventDefault();

    var visible = document.getElementById('password').type == 'password' ? false : true;
    document.getElementById('password').type = visible ? 'password' : 'text';
    document.getElementById('btnVisibilità').innerHTML = visible ? 'Vedi password' : 'Nascondi password'
}

function aggiungiPassword(e){
    e.preventDefault();

    var username = document.getElementById('username').value;

    var password = document.getElementById('password').value;

    var platform = document.getElementById("platform").value;

    fetch("https://gabrielefurlan.pythonanywhere.com/passwords", {
        method : 'POST',
        headers: {
            'Content-Type': 'appliation/json'
        },
        body : JSON.stringify({
            username: username,
            password: password,
            platform: platform,
            user_id: sessionStorage.id
        })
    })
    .then(res =>{
        if(res.ok) {
            console.log("success");
            window.location.replace("/passwords.html");
        } else {
            console.log("error");
        }
    })
}