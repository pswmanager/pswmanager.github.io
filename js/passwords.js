function init(){
    if(sessionStorage.id == 'null' || sessionStorage.id == undefined){
        window.location.replace("/forms.html?type=login");
        alert("Prima di poter accedere alla tua sezione personale devi effettuare l'accesso")
    }
    reload();
}

function logout(){
    sessionStorage.id = null;
    window.location.replace("/index.html");
}

function hideloader(){
    document.getElementById('loader').style.display = 'none';
}

function showloader(){
    document.getElementById('loader').style.display = 'block';
}

function hide_no_psw(){
    document.getElementById('no-password').style.display = 'none';
}

function show_no_psw(){
    document.getElementById('no-password').style.display = 'block';
}

function pswVisibility(id){
    var visible = document.getElementById('input-' + id).type == 'password' ? false : true;
    document.getElementById('input-' + id).type = visible ? 'password' : 'text';
    document.getElementById('eye-' + id).src = visible ? '/images/eye.svg' : '/images/eye-slash.svg'
}

function reload(){

    document.getElementById("values").innerHTML = "";       

    hide_no_psw();
    showloader();

    request('GET', "https://gabrielefurlan.pythonanywhere.com/passwords?user_id=" + sessionStorage.id, (json) =>{
        var data = JSON.parse(json)
        hideloader();
        if(data.length == 0) {
            show_no_psw();
            return;
        }
        for(var i = 0; i < data.length; i++){
            document.getElementById("values").innerHTML += renderPsw(data[i].id, data[i].platform, data[i].username, data[i].password);
        }
    })
}

function remove_password(id){
    fetch("https://gabrielefurlan.pythonanywhere.com/passwords?id=" + id, {
        method:'DELETE',
    })
    .then(res => {
        return res.json()
    })
    .then(data => {
        if(!data.Error) {
            alert("Password eliminata correttamente!");
            reload();
        } else {
            alert("Qualcosa non ha funzionato!");
        }
    });
}

function update_password(id){
    fetch("https://gabrielefurlan.pythonanywhere.com/passwords", {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            id: id,
            password: document.getElementById('input-' + id).value
        })
    })
    .then(res => {
        return res.json()
    })
    .then(data => {
        if(data.Error) {
            alert("Qualcosa non ha funzionato!");
            return;
        }
        alert("Password modificata!");
        reload();
    });
}

init();