// Theme Toggle
themeToggle.addEventListener('click', () => {
    console.log('Theme toggle clicked');
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      themeToggle.textContent = 'Switch to Light Mode';
    } else {
      themeToggle.textContent = 'Switch to Dark Mode';
    }
  });
  
  // Tab Switching
  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      console.log(`Tab button clicked: ${button.getAttribute('data-tab')}`);
      const targetTab = button.getAttribute('data-tab');
      tabContents.forEach((content) => content.classList.add('hidden'));
      document.getElementById(targetTab).classList.remove('hidden');
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
  
  // Form Validation
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted');
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !password || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
  
    alert('Form submitted successfully!');
    contactForm.reset();
  });