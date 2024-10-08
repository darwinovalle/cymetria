function verificarEdad(){
    let edad = document.getElementById('inputedad').value;
    let resultado = document.getElementById('resultado');

    resultado.classList.remove('mensaje-error', 'mensaje-invalido', 'mensaje-valido')

    if(edad == ''){
        resultado.textContent = "Por favor ingresa tu edad."
        resultado.style.color = 'red'
        // resultado.classList.add('mensaje-error');
    } else if(edad < 18 && edad > 0){
        resultado.textContent = "Eres menor de edad, no puede ingresar al sitio"
        resultado.style.color = 'green'
        // resultado.classList.add('mensaje-valido');
    } else if (edad >= 18 && edad < 100) {
        resultado.textContent = "Eres una persona mayor de edad, puedes ingresar al sitio."
        resultado.style.color = 'green'
        // resultado.classList.add('mensaje-valido');
    } else if (edad >= 100) {
        resultado.textContent = "La longitud de la edad es mayor a la esperada."
        resultado.style.color = 'red'
        // resultado.classList.add('mensaje-invalido');
    } else {
        resultado.textContent = "La edad no puede ser negativa o igual a cero."
        resultado.style.color = 'red'
        // resultado.classList.add('mensaje-invalido');
    }

}