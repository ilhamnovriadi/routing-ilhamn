import React from "react";
import { Link, useParams } from "react-router-dom";
import DataMateri from "../materi.json";

function Materi(props) {
  const { id } = useParams();
  const data = DataMateri.find((item) => item.path === id);
  if (data === undefined) {
    return (
      <div className="row">
        <div className="card-nomateri">
          <h1>Materi Tidak Tersedia</h1>
          <Link to={-1}>
            <h3>Kembali</h3>
          </Link>
        </div>
      </div>
    );
  } else {
    const { content, materi } = data;
    return (
      <div className="row">
        <div className="card-materi">
          <h1>{materi}</h1>
          <p>{content}</p>
        </div>
      </div>
    );
  }
}

export default Materi;
