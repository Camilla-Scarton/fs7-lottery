import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { id } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const endSession = () => {
        dispatch(logout());
        navigate("/");
    }

    return (
    <div>
        {id}
        <button onClick={endSession}>Log out</button>
    </div>
    )
}

export default Home;