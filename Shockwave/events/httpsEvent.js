class httpsEvent{
    getURL(url){
        window.location.href = url;
    }
    loadRequest(getID, src){
        document.getElementById(getID).innerHTML = src;
    }
    
}