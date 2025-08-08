document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear all errors
  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  let isValid = true;

  const name = document.getElementById('fullname');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');

  if (name.value.trim() === '') {
    document.getElementById('nameError').textContent = 'Full name is required.';
    isValid = false;
  }

  if (email.value.trim() === '') {
    document.getElementById('emailError').textContent = 'Email is required.';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    document.getElementById('emailError').textContent = 'Enter a valid email.';
    isValid = false;
  }

  if (subject.value.trim() === '') {
    document.getElementById('subjectError').textContent = 'Subject is required.';
    isValid = false;
  }

  if (message.value.trim() === '') {
    document.getElementById('messageError').textContent = 'Message is required.';
    isValid = false;
  }

  if (isValid) {
    alert('✅ Thank you! Your message has been sent.');
    document.getElementById('contactForm').reset();
  }
});
