function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function copyEmail() {
    const str = 'ed.evihyzarc@redienhcs.i';
    const email = str.split('').reverse().join('');

    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('E-Mail in die Zwischenablage kopiert: ' + email);
}