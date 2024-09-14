const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h3>Pesquisar</h3>
      <input
        type="text"
        className="input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para pesquisar sua tarefa..."
      ></input>
    </div>
  );
};

export default Search;