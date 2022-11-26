import React, {useState} from "react";
import './LoginInput.scss';
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";


function LoginInput({icon, placeholder, type,textInputHandler}) {

    const [focus, setFocus] = useState(false)
    const [inputType, setInputType] = useState(`${type}`)
    const [showPass, setShowPass] = useState(false)

    const focusHandler = () => {
        setFocus(true)
    }
    const UnFocusHandler = () => {
        setFocus(false)
    }

    const showPasswordHandler = () => {
        setShowPass(!showPass)
        showPass ? setInputType("password") : setInputType("text")
    }
    const inputPasswordHandler = () => {
        if (type === 'password' && !showPass) {
            return <AiFillEye className="showPassword" onClick={showPasswordHandler}/>
        } else if (type === 'password' && showPass) {
            return <AiFillEyeInvisible className="showPassword" onClick={showPasswordHandler}/>
        }
    }


    return (
        <div className='loginInput'>
                    <span style={{width: `${focus ? "20%" : "0"}`}}>
                        {icon}
                    </span>
            <input type={inputType} placeholder={placeholder} onFocus={focusHandler} onBlur={UnFocusHandler} onChange={textInputHandler}/>
            {inputPasswordHandler()}
        </div>

    );
}

export default LoginInput;
