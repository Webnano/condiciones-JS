

function StartCountdown() {
    const bordeImagen = document.querySelector('#Captura');
        if (bordeImagen.style.border === '2px solid red'){
            bordeImagen.style.border = '';
        }else{
            bordeImagen.style.border = '2px solid red';
        }   
}

function Startverifica() {
    total = Number(document.getElementById('sticker01').value) + Number(document.getElementById('sticker02').value) + Number(document.getElementById('sticker03').value)

    if (total >= 11) {
        mensaje = document.getElementById('mensaje');
        mensaje.innerHTML = "Llevas demasiados stickers";
        mensaje.classList.remove('text-white');
        mensaje.classList.add('text-red-500');
    } else {
        
        mensaje.innerHTML = "Llevas: " + total + " stickers";
        mensaje.classList.remove('text-red-500');
        mensaje.classList.add('text-white');

    }
   
}

function Confirmame() {
    let seleccion1 = document.querySelector('#selector1').value;
    let seleccion2 = document.querySelector('#selector2').value;
    let seleccion3 = document.querySelector('#selector3').value;

    let password = seleccion1 + seleccion2 + seleccion3;

    if(password ==='911'){
        respuesta.innerHTML = "password correcta";
        respuesta.innerHTML.style.color = 'red';

    }else if (password === '714'){
        respuesta.innerHTML = "password correcta";
    }else {
        respuesta.innerHTML = "password incorrecta";
    }
 
}


    

    
    
    


       
   
