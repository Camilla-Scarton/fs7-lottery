import { useState } from "react";
import { authUser } from "../data";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        const { value, name } = event.target;
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const is_auth = authUser(form.email, form.password);
        if (is_auth) {
            dispatch(login({
                id: is_auth,
            }))
            navigate("/home");
        } else {
            alert("Email o password errati");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="border border-gray-500" type="email" name="email" value={form.email} onChange={handleChange} required />
            <input className="border border-gray-500 mx-2" type="password" name="password" value={form.password} onChange={handleChange} required />
            <button type="submit">Accedi</button>
        </form>
    )
}

export default Login;