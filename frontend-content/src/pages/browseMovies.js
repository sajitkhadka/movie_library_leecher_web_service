import React, { useEffect, useState } from "react";
import ImageRow from "./browse/ImageRow";
import { Container, Row } from "reactstrap";
import axios from "axios";
import Navbar from "../layout/navbar";
import Spinner from "../components/spinner-component";

// const m = [
//   {
//     id: "5",
//     title: "Forrest Gump",
//     image:
//       "https://images.freeimages.com/images/large-previews/8a1/small-waterfall-1376352.jpg",
//     released: "2019",
//     synopsis: "It is one of the best movie",
//     length: 100,
//     genre: "Adventure",
//     director: "Sajit Khadka",
//     producer: "Sajit Khadka",
//   },
//   {
//     id: "5",
//     title: "Hotel Califorina",
//     image:
//       "https://images.freeimages.com/images/large-previews/1c9/maine-at-4-45-am-1370871.jpg",
//     released: "2019",
//     synopsis: "It is one of the best movie",
//     length: 100,
//     genre: "Adventure",
//     director: "Sajit Khadka",
//     producer: "Sajit Khadka",
//   },
//   {
//     id: "5",
//     title: "Tarjen",
//     image:
//       "https://images.freeimages.com/images/large-previews/443/horse-1393073.jpg",
//     released: "2019",
//     synopsis: "It is one of the best movie",
//     length: 100,
//     genre: "Adventure",
//     director: "Sajit Khadka",
//     producer: "Sajit Khadka",
//   },
// ];
export default function Browse() {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/RestServiceClient/api/movie")
      .then((response) => {
        setMovies(response.data);
        setLoading(false);
        //console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(movies);
  return (
    <div>
      <Navbar />
      <Container className="themed-container">
        <Row className="pr-4 pl-4">
          <div>
            <h1>Movies</h1>
            <p>
              Movies move us like nothing else can, whether they’re scary,
              funny, dramatic, romantic or anywhere in-between. So many titles,
              so much to experience.
            </p>
          </div>
        </Row>

        {loading ? <Spinner /> : <ImageRow movies={movies} />}
        {/* <ImageRow />
        <ImageRow /> */}
      </Container>
    </div>
  );
}
