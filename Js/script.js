let registeredUser = '';
let registeredPassword = '';

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
    } else {
        alert('Usuario o contraseña incorrectos');
    }

    console.log('Usuario:', usuario);
    console.log('Contraseña:', password);
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

    if (newUsuario === '' || newPassword === '') {
        alert('Por favor, llena todos los campos');
        return;
    }

    registeredUser = newUsuario;
    registeredPassword = newPassword;

    alert('Usuario registrado con éxito');
    showLogin();
}

