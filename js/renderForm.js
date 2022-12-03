var param = new URL(window.location.href).searchParams.get('type');

if(param == 'sign-up'){
    document.getElementById('front-name').innerHTML = 'Sign up';
    document.getElementById('back-name').innerHTML = 'Login';
    document.getElementById('login').className = 'card-back';
    document.getElementById('sign-up').className = 'card-front';
} else {
    document.getElementById('front-name').innerHTML = 'Login';
    document.getElementById('back-name').innerHTML = 'Sign up';
    document.getElementById('login').className = 'card-front';
    document.getElementById('sign-up').className = 'card-back';
}