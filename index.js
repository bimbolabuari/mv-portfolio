const storeValue = () => {
  const formData = {
    name: document.getElementById('.name').value,
    email: document.getElementById('.email').value,
    message: document.getElementById('.message').value
  };
  localStorage.setItem('formData', JSON.stringfy(formData));
};

const form = document.querySelector('form');
form.addEventListener('input', storeValue());
const newFormData = JSON.parse(localStorage.getItem('formData'));

form.name.value = newFormData.name;
form.replyto.value = newFormData.email;
form.message.value = newFormData.message;
