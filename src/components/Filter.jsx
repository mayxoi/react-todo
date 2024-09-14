const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
      <h3>Filtrar: </h3>
      <div className="filter-options">
        <p>Status:</p>
        <div className="filtragem"><select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">Todas</option>
          <option value="Completed">Completas</option>
          <option value="Incomplete">Incompletas</option>
        </select>
        </div>
        <div className="ordemalfa">
        <button onClick={() => setSort('A-Z')}>A-Z</button>
        <button onClick={() => setSort('Z-A')}>Z-A</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
