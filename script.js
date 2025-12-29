const btn_email = document.getElementById('email');
const btn_wa = document.getElementById('wa');

const popup_email = document.getElementById('content2');
const close = document.getElementById('close');

btn_email.addEventListener('click', function() {
    popup_email.style.display = 'block';
});

close.addEventListener('click', function() {
    popup_email.style.display = 'none';
});

