var opened = false

function nav () {
    document.getElementById('nav-icon').src = !opened ? "/images/x-circle.svg" : "/images/ham.svg";
    opened = !opened;
}