import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  // Crear State de Citas
  const [cita, setCita] = useState({
    paciente: "",
    acompañante: "",
    edad: "",
    vacuna: "",
    fecha: "",
    hora: "",
  });

  //
  const [error, setError] = useState(false);

  // Función que se ejecuta cada vez que el usuario escribe un input
  const actualizarState = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores
  const { paciente, acompañante, edad, vacuna, fecha, hora } = cita;

  

  // Al enviar formulario
  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    if (
      paciente.trim() === "" ||
      acompañante.trim() === "" ||
      edad.trim() === "" ||
      vacuna.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === ""
    ) {
      setError(true);
      return;
    }

    // Eliminar el mensaje previo
    setError(false);

    // Asignar un ID
    cita.id = uuidv4();

    // Crear la cita
    crearCita(cita);

    // Reiniciar el form
    setCita({
      paciente: "",
      acompañante: "",
      edad: "",
      vacuna: "",
      fecha: "",
      hora: "",
    });
  };

  return (
    <>
      <h2>Crear Cita para vacunación</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>Nombre del paciente</label>
        <input
          type="text"
          name="paciente"
          className="u-full-width"
          placeholder="Nombre paciente"
          onChange={actualizarState}
          value={paciente}
        />

        {/*   */}
        <label>Nombre del acompañante</label>
        <input
          type="text"
          name="acompañante"
          className="u-full-width"
          placeholder="Nombre acompañante"
          onChange={actualizarState}
          value={acompañante}
        />

        {/* */}
        <label htmlFor="edad">Edad del paciente</label>
        <select
          name="edad"
          className="u-full-width"
          onChange={actualizarState}
          value={edad}
        >
          <option value="+79">+79</option>
          <option value="70-79">70-79</option>
          <option value="60-69">60-69</option>
          <option value="50-59">50-59</option>
          <option value="40-49">40-49</option>
          <option value="30-39">30-39</option>
          <option value="18-29">18-29</option>
          <option value="-18">-18</option>
        </select>

        {/*   */}
        <br></br>
        {/* */}
        <label htmlFor="vacuna">Vacuna asignada</label>
        <select
          name="vacuna"
          className="u-full-width"
          onChange={actualizarState}
          value={vacuna}
        >
          <option value="Pfizer - BioNTech">Pfizer - BioNTech</option>
          <option value="Astrazeneca">Astrazeneca</option>
          <option value="Sputnik V">Sputnik V</option>
          <option value="Moderna">Moderna</option>
          <option value="Johnson &amp; Johnson / Janssen">
            Johnson &amp; Johnson / Janssen
          </option>
          <option value="Sanofi/GSK">Sanofi/GSK</option>
          <option value="Novamax">Novamax</option>
          <option value="Curevac">Curevac</option>
        </select>

        {/*   */}
        <label>Fecha de vacunación</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        {/*   */}
        <label>Hora de vacunación</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <br></br>
        {/*   */}
        <button
          type="submit"
          className="u-full-width button-primary"
          onChange={actualizarState}
        >
          Agregar Cita
        </button>
      </form>
    </>
  );
};

// Ejemplo de como usar los propTypes para documentar los tipos de props
Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};

export default Formulario;