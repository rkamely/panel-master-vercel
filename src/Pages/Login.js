import React, {useState} from "react";
import './Login.scss';
import {FaUser} from "react-icons/fa";
import {RiLockPasswordFill} from "react-icons/ri";
import LoginInput from "../Components/LoginInput";
import loginBg from "../Assets/loginBg.svg"
import {useHistory} from "react-router-dom";

function Login() {
    const [loading, setLoading] = useState(false)

    let navigate = useHistory();
    const [entryForm, setEntryForm] = useState({
        username: '',
        password: '',
    })

    const [entryFormErrors, setEntryFormErrors] = useState({
        username: '',
        password: '',
    })

    const authentication = async () => {
        setLoading(true)
        await fetch(`http://10.0.85.65:4030/auth/sign-in`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json '
                },
                body: JSON.stringify({username: entryForm.username, password: entryForm.password})
            }
        )
            .then(response => response.json())
            .then((data) => {
                // console.log(data)
                localStorage.setItem("token", data.jwtToken)
                setEntryFormErrors({
                    username: "",
                    password: ""
                })
                if (data.jwtToken) {
                    navigate.push('/login')
                }
            })
        setLoading(false)

    }

    const entryFormSubmit = (e) => {

        e.preventDefault()
        if (entryForm.username === "" || entryForm.username === undefined) {
            setEntryFormErrors(prevState => ({
                ...prevState,
                username: 'لطفا نام کاربری خود را وارد فرمایید.'
            }))
            // reject(entryFormErrors);
        }
        if (entryForm.password === "" || entryForm.password === undefined) {
            setEntryFormErrors(prevState => ({
                ...prevState,
                password: 'لطفا رمز عبور خود را وارد فرمایید.'
            }))
            // reject();
        }
        if (entryForm.username !== "" && entryForm.password !== "") {
            authentication()
                .then(() => navigate.push("/"))
                .catch(() => {
                    setEntryFormErrors({
                        username: "",
                        password: 'نام کاربری و یا رمز عبور اشتباه است.'
                    })
                    setLoading(false)
                })
        }
        // })
    }


    const textInputHandler = (e, type) => {
        setEntryForm(prevState => ({
            ...prevState,
            [type]: e.target.value
        }))
    }


    return (

        <div className="login">
            <form onSubmit={entryFormSubmit}>
                <img src="./img/starOneLogo.png" alt=""/>
                <h1>صفحه ورود</h1>
                <LoginInput icon={<FaUser/>} placeholder={"نام کاربری"} type={'text'}
                            textInputHandler={(e) => {
                                textInputHandler(e, 'username')
                            }}
                />
                {entryFormErrors.username ? <span style={{color:"red"}}>{entryFormErrors.username}</span> : null}
                <LoginInput icon={<RiLockPasswordFill/>} placeholder={"کلمه عبور"} type={'password'}
                            textInputHandler={(e) => {
                                textInputHandler(e, 'password')
                            }}
                />
                {entryFormErrors.password ? <span style={{color:"red"}}>{entryFormErrors.password}</span> : null}
                <span>
                    <input type="checkbox"/>
                    <p>منو به خاطر بسپار</p>
                </span>
                <button type="submit">ورود</button>
            </form>
            <div style={{backgroundImage: `url(${loginBg})`}}>
                <img src="./img/starOneLogo.png" alt=""/>
            </div>
        </div>
    );
}

export default Login;
