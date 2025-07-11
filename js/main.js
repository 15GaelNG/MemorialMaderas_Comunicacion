// Función para cargar componentes
async function loadComponent(id, filePath, callback = null) {
  try {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    if (typeof callback === "function") {
      callback(); // Ejecutar función después de cargar
    }
  } catch (err) {
    console.error(`Error cargando ${filePath}:`, err);
  }
}

// Cargar todos los componentes
loadComponent("navbar", "components/navbar.html");
loadComponent("hero", "components/hero.html", () => {
  AOS.init();
});
loadComponent("about", "components/about.html");
loadComponent("packages", "components/packages.html");
loadComponent("quote", "components/quote.html");
loadComponent("pets", "components/pets.html");
loadComponent("contact", "components/contact.html");
loadComponent("footer", "components/footer.html");

document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});
