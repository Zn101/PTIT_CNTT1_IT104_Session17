import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Modal delete
  const [deleteId, setDeleteId] = useState<number | null>(null);

  // Load data từ localStorage khi mở trang
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Lưu todos vào localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newTodo.trim()) {
      setError("Tên công việc không được để trống!");
      return;
    }
    if (todos.some((todo) => todo.text.toLowerCase() === newTodo.toLowerCase())) {
      setError("Tên công việc đã tồn tại!");
      return;
    }

    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
    setError("");
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteConfirm = () => {
    if (deleteId !== null) {
      setTodos(todos.filter((todo) => todo.id !== deleteId));
      setDeleteId(null);
    }
  };

  const handleEdit = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSaveEdit = (id: number) => {
    if (!editText.trim()) {
      alert("Tên công việc không được để trống!");
      return;
    }
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

                {/* Form thêm task */}
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

                {/* Hiển thị lỗi */}
                {error && <p className="text-danger">{error}</p>}

                {/* Danh sách công việc */}
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
                          onClick={() => setDeleteId(todo.id)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal xác nhận xóa */}
      {deleteId !== null && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Xác nhận xóa</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setDeleteId(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Bạn có chắc muốn xóa công việc này?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setDeleteId(null)}
                >
                  Hủy
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDeleteConfirm}
                >
                  Đồng ý
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
