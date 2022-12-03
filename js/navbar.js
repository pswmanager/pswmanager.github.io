var opened = false

function nav () {
    document.getElementById('nav-icon').src = !opened ? "/frontend/images/x-circle.svg" : "/frontend/images/ham.svg";
    opened = !opened;
}