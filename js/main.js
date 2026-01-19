/* Load static sections (navbar & footer) */
function loadStatic(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

/* Load dynamic page content */
function loadPage(file) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error("Page not found");
      return res.text();
    })
    .then(html => {
      document.getElementById("content").innerHTML = html;
      window.scrollTo(0, 0);
    })
    .catch(() => {
      document.getElementById("content").innerHTML =
        "<p style='padding:20px'>Error loading content</p>";
    });
}

/* INITIAL LOAD */
loadStatic("navbar", "sections/navbar.html");
loadStatic("footer", "sections/footer.html");
loadPage("sections/hero.html"); // default page
