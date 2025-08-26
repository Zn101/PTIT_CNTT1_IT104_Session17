import React, { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Cras justo odio", completed: true },
    { id: 2, text: "Cras justo odio", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSaveEdit = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditId(null);
    setEditText("");
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <h3 style={{ textAlign: "center", marginBottom: "40px" }}>
                  Quản lý công việc
                </h3>

                {/* Form to add new task */}
                <form
                  className="d-flex justify-content-center align-items-center mb-4"
                  onSubmit={handleAdd}
                >
                  <div className="form-outline flex-fill">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Thêm công việc"
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-info ms-2">
                    Thêm
                  </button>
                </form>

                {/* Tabs nav */}
                <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <span className="nav-link active">Tất cả công việc</span>
                  </li>
                </ul>

                {/* Todo List */}
                <ul className="list-group mb-0">
                  {todos.map((todo) => (
                    <li
                      key={todo.id}
                      className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
                      style={{ backgroundColor: "#f4f6f7" }}
                    >
                      <div>
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          checked={todo.completed}
                          onChange={() => handleToggle(todo.id)}
                        />
                        {editId === todo.id ? (
                          <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="form-control d-inline w-auto"
                          />
                        ) : todo.completed ? (
                          <s>{todo.text}</s>
                        ) : (
                          todo.text
                        )}
                      </div>
                      <div>
                        {editId === todo.id ? (
                          <a
                            href="#!"
                            className="text-success me-3"
                            title="Lưu"
                            onClick={() => handleSaveEdit(todo.id)}
                          >
                            <i className="fas fa-check"></i>
                          </a>
                        ) : (
                          <a
                            href="#!"
                            className="text-info me-3"
                            title="Sửa công việc"
                            onClick={() => handleEdit(todo.id, todo.text)}
                          >
                            <i className="fas fa-pencil-alt"></i>
                          </a>
                        )}
                        <a
                          href="#!"
                          className="text-danger"
                          title="Xóa công việc"
                          onClick={() => handleDelete(todo.id)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* End Todo List */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
