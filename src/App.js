import { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage";
import TodoListPage from "./components/TodoListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("token"));
    if (data) {
      setToken(data);
    }
  }, []);

  if (!token) {
    return (
      <div>
        {" "}
        <LoginPage setToken={setToken} />{" "}
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginpage" element={<LoginPage />}></Route>
        <Route path="/" element={<TodoListPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
