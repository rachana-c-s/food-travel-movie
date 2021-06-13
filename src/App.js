import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Movie: [
    { name: "3 Idiots", rating: "8.4/10" },
    { name: "Yeh Jawani Hai Deewani", rating: "7.1/10" },
    { name: "Zindagi na milegi dobara", rating: "8.2/10" },
    { name: "Barfi!", rating: "8.1/10" }
  ],

  food: [
    { name: "The Sigdi", rating: "4.5/5" },
    { name: "Big Mishra", rating: "4/5" },
    { name: "KFC", rating: "4/5" },
    { name: "Seven Beans", rating: "4/5" }
  ],
  travel: [
    { name: "Nishani Moote", rating: "Near Coorg" },
    { name: "Madhugiri", rating: "Near Bangalore" },
    { name: "Green Route Treck", rating: "Near Mangalore" },
    { name: "Kudremukh", rating: "Near Sringeri" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("travel");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>😊Best Ever Food And Travel Movies </h1>
      <p style={{ fontSize: "smaller" }}> By ME🙃</p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
