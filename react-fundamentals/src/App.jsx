// src/App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PeopleListPage from "./pages/PeopleListPage";
import PersonDetailPage from "./pages/PersonDetailPage";

function App() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // filtros
  const [nameFilter, setNameFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");
  const [cityFilter, setCityFilter] = useState("all");

  useEffect(() => {
    async function fetchPeople() {
      try {
        setIsLoading(true);

        const response = await fetch(
          "https://randomuser.me/api/?results=20&nat=us,gb,es",
        );

        const data = await response.json();

        const mappedPeople = data.results.map((person) => ({
          id: person.login.uuid,
          name: `${person.name.first} ${person.name.last}`,
          location: `${person.location.city}, ${person.location.country}`,
          city: person.location.city,
          gender: person.gender,
          age: person.dob.age,
          image: person.picture.medium,
        }));

        setPeople(mappedPeople);
      } catch (error) {
        console.error("Error fetching people:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPeople();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PeopleListPage
            people={people}
            isLoading={isLoading}
            nameFilter={nameFilter}
            setNameFilter={setNameFilter}
            genderFilter={genderFilter}
            setGenderFilter={setGenderFilter}
            cityFilter={cityFilter}
            setCityFilter={setCityFilter}
          />
        }
      />

      {/*  Ruta de detalle */}
      <Route
        path="/person/:id"
        element={<PersonDetailPage people={people} isLoading={isLoading} />}
      />
    </Routes>
  );
}

export default App;
