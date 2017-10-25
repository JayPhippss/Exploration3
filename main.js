document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInput('name');
    var email = getInput('email');
    var number = getInput('number');
    var address = getInput('address');
    
}

function getInput(id){
    return document.getElementById(id).value;
}