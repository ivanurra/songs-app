import React from "react";

const Formulario = () => {
  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form className="col card text-white bg-transparent mb-5 pt-5 pb-2">
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
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block">SEARCH</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
