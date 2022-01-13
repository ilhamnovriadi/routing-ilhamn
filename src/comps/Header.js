import React from "react";

export const Header = ({ path, navigate }) => {
  return (
    <div className="container-navbar">
      <div className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          <h3>BELAJAR MERN</h3>
          <p>oleh Ilham Novriadi</p>
        </div>
        <div>
          {path !== "/" && (
            <button onClick={() => navigate(-1)}>
              <i className="fa fa-arrow-left"></i>
              Kembali
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
