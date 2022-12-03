function request(method, url, callback, body){
    const http = new XMLHttpRequest();

    http.open(method, url)

    http.setRequestHeader('Content-type', 'application/json');

    http.send(body);
    
    http.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            callback(this.responseText)
        }
    }
}