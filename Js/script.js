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
    const genderElements = document.getElementsByName('gender');
    let newGender = '';

    for (let i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            newGender = genderElements[i].value;
            break;
        }
    }

    if (newUsuario === '' || newPassword === '' || newLocation === '' || newGender === '' || newColor === '') {
        alert('Por favor, llena todos los campos');
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

// Llama a displayUserData cuando la página se carga para mostrar los datos del usuario
window.onload = function() {
    if (isLoggedIn) {
        displayUserData();
        document.getElementById('paginaOculta').style.display = 'block';
        document.getElementById('loginContainer').style.display = 'none';
    } else {
        document.getElementById('paginaOculta').style.display = 'none';
        document.getElementById('loginContainer').style.display = 'flex';
    }
};