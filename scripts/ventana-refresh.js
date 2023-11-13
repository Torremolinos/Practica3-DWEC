document.addEventListener("DOMContentLoaded", () => {
  const nuevaVentana = () => {
    const abrirVentana = document.createElement("button");
    abrirVentana.innerText = `Abrir ventana`;
    abrirVentana.style.margin = "2px";
    abrirVentana.style.padding = "2px";
    document.body.appendChild(abrirVentana);
    abrirVentana.addEventListener("click", openTana);
    const cerrar = document.createElement("button");
    cerrar.innerText = `Cerrar ventana`;
    cerrar.style.margin = "2px";
    cerrar.style.padding = "2px";
    document.body.appendChild(cerrar);
    cerrar.addEventListener("click", () => {
      abrirVentana.close();
    });
  };
  const openTana = () => {
    const url = window.location.href;
    const protocoloX = window.location.protocol;

    openTana.document.open();
    openTana.document.write(`
        <h1>EJEMPLO DE VENTANA NUEVA</h1>
        <p><b>URL Completa: </b>${url}</p>
        <p><b>Protocolo utilizado: </b>${protocoloX}</p>
        <iframe width="800" height="600" src="https://hotellallastra.app/inicio"></iframe>`);
    openTana.document.close();
  };

  const cerrarTana = () => {
    abrirVentana.close();
  };
});
