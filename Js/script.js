let registeredUser = localStorage.getItem('registeredUser') || '';
let registeredPassword = localStorage.getItem('registeredPassword') || '';
let registeredLocation = localStorage.getItem('registeredLocation') || '';
let registeredGender = localStorage.getItem('registeredGender') || '';
let registeredColor = localStorage.getItem('registeredColor') || '';
let isFirstPurchase = JSON.parse(localStorage.getItem('isFirstPurchase')) || false;
let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || false;

function login() {
    const usuario = document.getElementById('Usuario').value;
    const password = document.getElementById('Password').value;
    
    if (usuario === '' || password === '') {
        alert('Por favor, llena todos los campos');
        return;
    }

    if (usuario === registeredUser && password === registeredPassword) {
        alert('Inicio de sesión exitoso');
        document.getElementById('paginaOculta').style.display = 'block';
        document.getElementById('loginContainer').style.display = 'none';
        isLoggedIn = true;
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
        displayUserData();
    } else {
        alert('Usuario o contraseña incorrectos');
    }

    console.log('Usuario:', usuario);
    console.log('Contraseña:', password);
}

function logout() {
    isLoggedIn = false;
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    document.getElementById('paginaOculta').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'flex';
    window.location.href = 'index.html'; // Redirige a la página de inicio de sesión
}

function showRegister() {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('registerContainer').style.display = 'flex';
}

function showLogin() {
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'flex';
}

function register() {
    const newUsuario = document.getElementById('NewUsuario').value;
    const newPassword = document.getElementById('NewPassword').value;
    const newLocation = document.getElementById('NewLocation').value;
    const newColor = document.getElementById('NewColor').value;
    const newFirstPurchase = document.getElementById('NewFirstPurchase').checked;
    const newCountry = document.getElementById('NewCountry').value;
    const genderElements = document.getElementsByName('gender');
    let newGender = '';

    for (let i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            newGender = genderElements[i].value;
            break;
        }
    }

    if (newUsuario === '' || newPassword === '' || newLocation === '' || newGender === '' || newColor === '' || newCountry === '') {
        alert('Por favor, llena todos los campos');
        return;
    }

    const confirmMessage = `Nombre de usuario: ${newUsuario}\nContraseña: ${newPassword}`;
    if (!confirm(confirmMessage)) {
        return;
    }

    registeredUser = newUsuario;
    registeredPassword = newPassword;
    registeredLocation = newLocation;
    registeredGender = newGender;
    registeredColor = newColor;
    isFirstPurchase = newFirstPurchase;

    localStorage.setItem('registeredUser', registeredUser);
    localStorage.setItem('registeredPassword', registeredPassword);
    localStorage.setItem('registeredLocation', registeredLocation);
    localStorage.setItem('registeredGender', registeredGender);
    localStorage.setItem('registeredColor', registeredColor);
    localStorage.setItem('isFirstPurchase', JSON.stringify(isFirstPurchase));

    alert('Usuario registrado con éxito');
    showLogin();
}

function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
}

function displayUserData() {
    document.getElementById('displayUser').innerText = registeredUser;
    document.getElementById('displayLocation').innerText = registeredLocation;
    document.getElementById('displayGender').innerText = registeredGender;
}

// Funciones para cambiar el color de fondo y convertir texto a mayúsculas
function handleFocus(event) {
    event.target.style.backgroundColor = '#e0e0e0';
}

function handleBlur(event) {
    event.target.style.backgroundColor = '';
    event.target.value = event.target.value.toUpperCase();
}

// Añadir eventos a los elementos del formulario
window.onload = function() {
    if (isLoggedIn) {
        displayUserData();
        document.getElementById('paginaOculta').style.display = 'block';
        document.getElementById('loginContainer').style.display = 'none';
    } else {
        document.getElementById('paginaOculta').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'flex';
    }

    const inputs = document.querySelectorAll('input[type="text"], input[type="password"], textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur);
    });

    // Mostrar la fecha del sistema y la fecha de la última modificación de la página
    const currentDate = new Date();
    const lastModified = document.lastModified;
    document.getElementById('currentDate').innerText = `Fecha actual: ${currentDate.toLocaleDateString()}`;
    document.getElementById('lastModified').innerText = `Última modificación: ${lastModified}`;

    // Mostrar el nombre del navegador y la versión
    let browserInfo = '';
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf('OPR') !== -1) {
        browserInfo = `Opera ${userAgent.match(/OPR\/(\d+\.\d+)/)[1]}`;
    } else if (userAgent.indexOf('Chrome') !== -1) {
        browserInfo = `Chrome ${userAgent.match(/Chrome\/(\d+\.\d+)/)[1]}`;
    } else if (userAgent.indexOf('Firefox') !== -1) {
        browserInfo = `Firefox ${userAgent.match(/Firefox\/(\d+\.\d+)/)[1]}`;
    } else if (userAgent.indexOf('Safari') !== -1) {
        browserInfo = `Safari ${userAgent.match(/Version\/(\d+\.\d+)/)[1]}`;
    } else if (userAgent.indexOf('MSIE') !== -1 || !!document.documentMode) {
        browserInfo = `Edg ${userAgent.match(/MSIE (\d+\.\d+)/)[1]}`;
    } else {
        browserInfo = `${navigator.appName} ${navigator.appVersion}`;
    }
    document.getElementById('browserInfo').innerText = `Navegador: ${browserInfo}`;
};