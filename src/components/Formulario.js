import React, { useState } from "react";

const Formulario = () => {
  // States

  const [busqueda, guardarBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const [error, guardarError] = useState(false);

  // Extraemos los datos

  const { artista, cancion } = busqueda;

  // Función a cada input para leer su contenido

  const actualizarState = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: [e.target.value],
    });
  };

  // Consultar las APIs

  const buscarInformacion = (e) => {
    e.preventDefault();

    if (artista.trim() === "" || cancion.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    // Pasamos la comprobación.
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            onSubmit={buscarInformacion}
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
          >
            <fieldset>
              <legend className="text-center">
                <span className="h4 font-weight-bold">SLSE</span>- Song Lyrics
                Search Engine Co.
              </legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Find your music artist...</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Artist Name"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>...and the lyrics of the song.</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Song Name"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                SEARCH
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
