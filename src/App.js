import { useState, useEffect } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";

function App() {
  // Guardar citas en localstorage para que no se borren
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  // Array de citas escritas
  const [citas, setCitas] = useState(citasIniciales);

  // Use Effect para cambio del state (para que no borre las citas guardadas al hacer reload)
  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  // Función que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  // Función que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  // Nueva función que elimina todas las citas
  
  const eliminarTodasLasCitas = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar todas las citas?")) {
      setCitas([]);
      localStorage.setItem("citas", JSON.stringify([]));
    }
  };

  // Mensaje condicional si aún no hay citas
  const titulo = citas.length === 0 ? "No hay citas" : "Listado de citas";

  return (
    <>
      <h1>Administrador de citas para vacunación</h1>
      <div className="container">
        <div className="row">
          <div className="form">
            <Formulario crearCita={crearCita} />
          </div>
          <h2>{titulo}</h2>
          <div className="cita-pedida">
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
          {/* Botón para eliminar todas las citas */}
          {citas.length > 0 && (
            <button onClick={eliminarTodasLasCitas} className="button eliminar u-full-width">
              Eliminar todas las citas
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;