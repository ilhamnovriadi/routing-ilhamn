import React from "react";
import { Card } from "./Card";

const MENU = [
  { id: 1, label: "Mulai Belajar", nav: "/materi" },
  { id: 2, label: "Counter", nav: "/counter" },
  { id: 3, label: "Hubungi Kami", nav: "/kontak" },
];
function Home() {
  return (
    <div className="row">
      <div className="container-card">
        {MENU.map((item, i) => {
          return <Card key={i} data={item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
