<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Contact - NEXTGEN BY DANCUN</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <nav>
    <div class="logo">NEXTGEN BY DANCUN</div>
    <ul>
      <li><a href="index.html#about">About</a></li>
      <li><a href="index.html#services">Services</a></li>
      <li><a href="index.html#portfolio">Portfolio</a></li>
      <li><a href="contact.html" class="active">Contact</a></li>
    </ul>
  </nav>

  <section class="contact-section" style="padding: 5rem 3rem; max-width: 600px; margin: 4rem auto;">
    <h2>Contact Me</h2>
    <form id="contactForm" action="#" method="POST" style="display: flex; flex-direction: column; gap: 1.5rem;">
      <label>
        Name
        <input type="text" name="name" required placeholder="Your Name" />
      </label>
      <label>
        Email
        <input type="email" name="email" required placeholder="you@example.com" />
      </label>
      <label>
        Message
        <textarea name="message" rows="5" required placeholder="Write your message here..."></textarea>
      </label>
      <button type="submit" style="padding: 1rem; background: #00d8ff; border: none; color: #000; font-weight: 700; cursor: pointer; border-radius: 5px;">
        Send Message
      </button>
    </form>
  </section>

  <script>
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for reaching out! I will get back to you soon.');
      form.reset();
    });
  </script>
</body>
</html>

