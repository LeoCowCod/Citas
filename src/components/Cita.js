const Cita = ({ cita, eliminarCita }) => (
    <div className="citas-container">
      <div className="cita">
        <p>
          Paciente: <span>{cita.paciente}</span>
        </p>
        <p>
          Acompañante: <span>{cita.acompañante}</span>
        </p>
        <p>
          Franja de edad: <span>{cita.edad} años</span>
        </p>
        <p>
          Vacuna asignada: <span>{cita.vacuna}</span>
        </p>
        <p>
          Fecha: <span>{cita.fecha}</span>
        </p>
        <p>
          Hora: <span>{cita.hora}</span>
        </p>
  
        <button
          onClick={() => eliminarCita(cita.id)}
          className="button eliminar u-full-width"
        >
          Eliminar &times;
        </button>
      </div>
    </div>
  );
  
  export default Cita;