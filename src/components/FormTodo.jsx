import { useState } from "react";

const FormTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return; // Se algum valor for nulo, retorna, não segue a função
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Crie sua tarefa</h2>
      <div className="conteudo-todoform>"><form onSubmit={handleSubmit}>
        <input
          type="text"
          className="tarefa"
          placeholder="Digite sua tarefa aqui!"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          className="option-apptodo"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
          <option value="Outros">Outros</option>
        </select>
        <button type="submit" className="button-tarefa">
          <i class="bi bi-plus-lg"></i>
        </button>
      </form>
      </div>
    </div>
  );
};

export default FormTodo;
