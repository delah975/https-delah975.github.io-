body {
  margin: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  background: #f4f6f8;
  color: #222;
}
nav {
  background: #219ebc;
  padding: 0;
}
nav ul {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 12px 0;
}
nav li {
  margin: 0;
}
nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background 0.3s;
}
nav a:hover, nav a:focus {
  background: #126782;
}
header {
  background: #8ecae6;
  color: #fff;
  padding: 40px 0 20px 0;
  text-align: center;
  animation: fadeInDown 1s;
}
header h1 {
  margin: 0 0 10px 0;
  font-size: 2.5em;
}
.social-links {
  margin: 16px 0 0 0;
}
.social-links a {
  color: #fff;
  background: #219ebc;
  padding: 7px 14px;
  margin: 0 6px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1em;
  display: inline-block;
  transition: background 0.2s;
}
.social-links a:hover {
  background: #023047;
}
main {
  max-width: 900px;
  margin: 30px auto;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
  padding: 30px;
}
section {
  margin-bottom: 40px;
}
#about h2, #interior-design h2, #contact h2, #testimonials h2, #newsletter h2, #blog h2 {
  color: #219ebc;
  margin-bottom: 16px;
}
#interior-design .gallery {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
#interior-design .gallery img {
  width: 260px;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.11);
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 1s forwards;
}
#interior-design .gallery img:nth-child(1) { animation-delay: 0.2s; }
#interior-design .gallery img:nth-child(2) { animation-delay: 0.4s; }
#interior-design .gallery img:nth-child(3) { animation-delay: 0.6s; }
#interior-design .gallery img:hover {
  transform: scale(1.07);
  box-shadow: 0 6px 24px rgba(33,158,188,0.21);
}
.blog-posts {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.blog-posts article {
  flex: 1 1 250px;
  background: #f7fbfc;
  border-radius: 10px;
  box-shadow: 0 2px 10px #219ebc22;
  padding: 18px;
  margin-bottom: 8px;
}
.blog-posts h3 {
  margin-top: 0;
  color: #023047;
}
.blog-posts a {
  color: #219ebc;
  text-decoration: underline;
  font-size: 0.96em;
}
.testimonials {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
}
.testimonials blockquote {
  background: #e0f7fa;
  border-left: 5px solid #219ebc;
  font-style: italic;
  margin: 0;
  padding: 18px 20px;
  border-radius: 8px;
  max-width: 350px;
}
.testimonials cite {
  display: block;
  text-align: right;
  font-style: normal;
  color: #126782;
  margin-top: 8px;
}
.newsletter-form {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}
.newsletter-form input[type="email"] {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  font-size: 1em;
  width: 220px;
}
.newsletter-form button {
  background: #219ebc;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
}
.newsletter-form button:hover {
  background: #126782;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
}
.contact-form label {
  font-weight: 500;
  color: #219ebc;
}
.contact-form input,
.contact-form textarea {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  font-size: 1em;
}
.contact-form textarea {
  min-height: 80px;
  resize: vertical;
}
.contact-form button {
  background: #219ebc;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 0;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
}
.contact-form button:hover {
  background: #126782;
}
#scrollTopBtn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 99;
  display: none;
  background: #219ebc;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  font-size: 2em;
  cursor: pointer;
  box-shadow: 0 4px 8px #219ebc33;
  transition: background 0.3s;
}
#scrollTopBtn:hover {
  background: #126782;
}
footer {
  text-align: center;
  color: #888;
  padding: 20px 0;
  margin-top: 20px;
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-40px);}
  to { opacity: 1; transform: translateY(0);}
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px);}
  to { opacity: 1; transform: translateY(0);}
}
@media (max-width: 700px) {
  nav ul {
    flex-direction: column;
    gap: 0;
  }
  nav a {
    display: block;
    padding: 12px 0;
    border-radius: 0;
  }
  main {
    padding: 12px;
  }
  #interior-design .gallery,
  .testimonials,
  .blog-posts {
    flex-direction: column;
    gap: 16px;
  }
  #interior-design .gallery img {
    width: 100%;
    height: auto;
  }
}# https-delah975.github.io-
