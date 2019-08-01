var x = document.getElementById("demo");
var botaoLocalizacao = document.querySelector('#btnGetLocalization');
var botaoAssinarContrato = document.querySelector('#btnAssinarContrato');
var latitude = 0;
var longitude = 0;

function estadoInicial(){
    mostrar(botaoLocalizacao);
    esconder(botaoAssinarContrato);
}
estadoInicial();

function getLocation() {
    try {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition,showError);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    } catch (error) {
        showError(error)
    }
    
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude= position.coords.longitude;

    x.innerHTML = "Latitude: " + latitude.toFixed(5) +  "<br>Longitude: " + longitude.toFixed(5); 

    if(latitude != 0 && longitude !=0){
        esconder(botaoLocalizacao);
        mostrar(botaoAssinarContrato);
    }
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "Usuário negou a solicitação de geolocalização."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "As informações de localização estão indisponíveis."
            break;
        case error.TIMEOUT:
            x.innerHTML = "A solicitação para obter a localização do usuário atingiu o tempo limite."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "Ocorreu um erro desconhecido."
            break;
    }
}

function assinarContrato(){
    console.log('Assinar Contrato');
}

function mostrar(item){
    item.classList.add('mostrar');
    item.classList.remove('esconder');
}

function esconder(item){
    item.classList.add('esconder');
    item.classList.remove('mostrar');
}