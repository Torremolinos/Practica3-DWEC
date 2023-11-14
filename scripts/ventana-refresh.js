document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("url").textContent = window.location.href;
  document.getElementById("protocolo").textContent = window.location.protocol;
  const btn = document.getElementById("close");
  btn.addEventListener("click", () => {
    window.close();
  });
});
