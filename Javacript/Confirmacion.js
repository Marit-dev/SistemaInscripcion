const datos= JSON.parse(localStorage.getItem("datosUsuario"));
document.getElementById("nombre").textContent=datos.nombre;
document.getElementById("provincia").textContent=datos.provincia;
document.getElementById("ciudad").textContent=datos.ciudad;
document.getElementById("sector").textContent=datos.sector;
document.getElementById("calle").textContent=datos.calle;
document.getElementById("carrera").textContent=datos.carrera;

const tabla= document.getElementById("tablaHorario");
const tbody= tabla.querySelector("tbody");
const horarios= JSON.parse(localStorage.getItem("horariosSeleccionados"));

const dias=["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];


horarios.forEach(h => {
    const fila= document.createElement("tr");

    const celdasDias= dias.map(()=> "<td></td>");
    const partes= h.horario.split(" ");
    const dia= partes[0];
    const hora= partes.slice(1).join("");

    const indiceDia= dias.indexOf(dia);

    if(indiceDia !== -1){
        celdasDias[indiceDia]=`<td>${hora}</td>`;
    }

    fila.innerHTML=`<td>${h.Nombre}</td>` + celdasDias.join("");

    tbody.appendChild(fila);
    
});

document.addEventListener("DOMContentLoaded", ()=>{
    const btnFinalizar=document.getElementById("btnFinalizar");
    btnFinalizar.addEventListener("click", ()=>{
        const confirmar= confirm("Estas seguro de que deseas finalizar?")

        if(confirmar){
            localStorage.removeItem("datosUsuario");
            localStorage.removeItem("horariosSeleccionados");
            window.location.href="./index.html";
        }
    });
});
