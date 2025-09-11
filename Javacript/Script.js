
//Boton continuar
document.addEventListener("DOMContentLoaded", function(){
const btnContinuar=document.querySelector(".btn-primary");

btnContinuar.addEventListener("click", ()=>{
    const nombre = document.getElementById("nombre").value.trim();
    const provincia = document.getElementById("provincia").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const sector = document.getElementById("sector").value.trim();
    const calle = document.getElementById("calle").value.trim();
    const carrera = document.getElementById("carrera").value;

    if (!nombre || !provincia || !ciudad || !sector || !calle || !carrera) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const datos={
        nombre,
        provincia,
        ciudad,
        sector,
        calle,
        carrera
    };

    localStorage.setItem("datosUsuario", JSON.stringify(datos));

    window.location.href= "./Materias.html";
});

});
document.addEventListener("DOMContentLoaded", () => {
    const datos = JSON.parse(localStorage.getItem("datosUsuario"));
    if (datos) {
        document.getElementById("nombre").value = datos.nombre || "";
        document.getElementById("provincia").value = datos.provincia || "";
        document.getElementById("ciudad").value = datos.ciudad || "";
        document.getElementById("sector").value=datos.sector || "";
       document.getElementById("calle").value=datos.calle || "";
       document.getElementById("carrera").value=datos.carrera || "";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const btnLimpiar = document.getElementById("btnLimpiar");

    btnLimpiar.addEventListener("click", () => {
       
        document.getElementById("nombre").value = "";
        document.getElementById("provincia").value = "";
        document.getElementById("ciudad").value = "";
        document.getElementById("sector").value = "";
        document.getElementById("calle").value = "";
        document.getElementById("carrera").value = "";

       
        localStorage.removeItem("datosUsuario");
    });
});
