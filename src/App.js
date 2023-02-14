import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { findById, findActiveDraw } from "./data";
import { setUserData } from "./store/userSlice";
import { setDrawData } from "./store/drawSlice";


const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);
  let user = useSelector((state) => state.user.info);
  let draw = useSelector((state) => state.draw)

  if (!id) {
    return <Navigate to="/" replace />;
  }

  if (!user) {
    user = findById("users", id, { populate: ["bets"] });
    dispatch(setUserData(user));
    console.log(user);
  }
  
  if(!draw.id){
    draw = findActiveDraw()
    dispatch(setDrawData(draw))
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
