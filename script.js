const btn_email = document.getElementById('email');
const btn_wa = document.getElementById('wa');

const popup_form = document.getElementById('form-contact');
const close = document.getElementById('close');

btn_email.addEventListener('click', function() {
    popup_form.style.display = 'block';
});

btn_wa.addEventListener('click', function() {
    popup_form.style.display = 'block';
});

close.addEventListener('click', function() {
    popup_form.style.display = 'none';
});

