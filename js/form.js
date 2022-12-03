function onload() {
    if(sessionStorage.id !== undefined && sessionStorage.id != 'null') {
        window.location.replace('/passwords.html');
    }
}

onload()