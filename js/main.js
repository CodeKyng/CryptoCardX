// main.js - small helpers and form validation
document.addEventListener('DOMContentLoaded', function () {
  // set year in footer
  const year = new Date().getFullYear();
  ['year','year2','year3','year4','year5'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = year;
  });

  // Simple client-side form validation using Bootstrap classes
  const forms = document.querySelectorAll('form[novalidate]');
  forms.forEach(form => {
    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault(); // prevent actual submit in demo
        // Replace this with real submit logic (ajax/fetch) later
        alert('Form validated (demo). Hook up backend or API to continue.');
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Optional: Add "active" class to navbar link that matches location
  const navLinks = document.querySelectorAll('.navbar .nav-link');
  navLinks.forEach(link => {
    if (link.href === window.location.href || window.location.pathname.endsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
});
