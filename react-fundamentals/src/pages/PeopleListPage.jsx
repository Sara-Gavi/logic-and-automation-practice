import UserCard from "../components/UserCard";

function PeopleListPage({
  people,
  isLoading,
  nameFilter,
  setNameFilter,
  genderFilter,
  setGenderFilter,
  cityFilter,
  setCityFilter,
}) {
  // ciudades únicas para el select
  const cityOptions = Array.from(
    new Set(people.map((person) => person.city)),
  ).sort();

  // aplicar filtros
  const filteredPeople = people
    .filter((person) => {
      const normalizedName = person.name.toLowerCase();
      const normalizedFilter = nameFilter.toLowerCase().trim();

      if (normalizedFilter === "") return true;
      return normalizedName.includes(normalizedFilter);
    })
    .filter((person) => {
      if (genderFilter === "all") return true;
      return person.gender === genderFilter;
    })
    .filter((person) => {
      if (cityFilter === "all") return true;
      return person.city === cityFilter;
    });

  // función de reseteo de filtros
  function handleResetFilters() {
    setNameFilter("");
    setGenderFilter("all");
    setCityFilter("all");
  }

  return (
    <main>
      <h1>React Fundamentals - People Directory</h1>

      {/* Filtros */}
      <section className="filters">
        {/* Filtro por nombre */}
        <div>
          <label htmlFor="nameFilter">Filter by name:</label>
          <input
            id="nameFilter"
            type="text"
            placeholder="Search by name..."
            value={nameFilter}
            onChange={(event) => setNameFilter(event.target.value)}
          />
        </div>

        {/* Filtro por género */}
        <div>
          <label htmlFor="genderFilter">Filter by gender:</label>
          <select
            id="genderFilter"
            value={genderFilter}
            onChange={(event) => setGenderFilter(event.target.value)}
          >
            <option value="all">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Filtro por ciudad */}
        <div>
          <label htmlFor="cityFilter">Filter by city:</label>
          <select
            id="cityFilter"
            value={cityFilter}
            onChange={(event) => setCityFilter(event.target.value)}
          >
            <option value="all">All cities</option>
            {cityOptions.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Botón de reseteo */}
        <button type="button" onClick={handleResetFilters}>
          Clear Filters
        </button>
      </section>

      {isLoading ? (
        <p>Loading people...</p>
      ) : filteredPeople.length === 0 ? (
        <p>No people found with these filters.</p>
      ) : (
        <section className="people-grid">
          {filteredPeople.map((person) => (
            <UserCard key={person.id} {...person} />
          ))}
        </section>
      )}
    </main>
  );
}

export default PeopleListPage;
