import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { findById } from "./data";
import { setUserData } from "./store/userSlice";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);
  let user = useSelector((state) => state.user.info);

  if (!id) {
    return <Navigate to="/" replace />;
  }

  if (!user) {
    user = findById("users", id, { populate: ["bets"] });
    dispatch(setUserData(user));
    console.log(user);
  }

  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
