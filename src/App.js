import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const ProtectedRoute = ({ children }) => {
  const { id } = useSelector((state) => state.auth);

  if (!id) {
    return <Navigate to="/" replace/>
  }
  return children;

}

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
