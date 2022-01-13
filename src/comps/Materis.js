import React from "react";
import { Card } from "./Card";

const MENU = [
  { id: 1, label: "Week 1 - Git", nav: "/materi/git" },
  { id: 1, label: "Week 2 - Frontend", nav: "/materi/frontend" },
  { id: 1, label: "Week 3 - Javascript", nav: "/materi/javascript" },
  { id: 1, label: "Week 4 - Javascript OOP", nav: "/materi/javascript-oop" },
  { id: 1, label: "Week 5 - Asynchronous", nav: "/materi/asynchronous" },
  { id: 1, label: "Week 6 - React JS", nav: "/materi/react-js" },
  { id: 1, label: "Week 7 - NodeJs x Express JS", nav: "/materi/nodejs-expressjs" },
  { id: 1, label: "Week 8 - MySql", nav: "/materi/mysql" },
  { id: 1, label: "Week 9 - MongoDB", nav: "/materi/mongodb" },
];
function Materis() {
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

export default Materis;
