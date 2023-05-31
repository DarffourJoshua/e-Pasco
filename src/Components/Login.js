import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import Signup from './Signup';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


export default function Login() {
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [validUsername, setValidUsername] = useState(false);
    const [usernameFocus, setUsernameFocus] = useState(false);
    
    const [passW, setPassW] = useState('');
    const [validpassW, setValidPassW] = useState(false);
    const [passWFocus, setpassWFocus] = useState(false);

    const [errorMsg, setErrorMsg] = useState('');



    useEffect(() => {
        const result = USER_REGEX.test(username);
        console.log(result);
        console.log(username);
        setValidUsername(result);
    }, [username])

    useEffect(() => {
        const result = PWD_REGEX.test(passW);
        console.log(result);
        console.log(passW);
        setValidPassW(result);
    }, [passW])

    useEffect(() => {
        setErrorMsg('');
    }, [username, passW])

    return ( 
    <section>
        <p ref={errRef} className={errorMsg ? "errmsg" : "offscreen"}
                aria-live='assertive'
        > 
            {errorMsg}
        </p>
        <form>
            <label htmlFor='username' className='block-label'>
                Username or Email:
                <FontAwesomeIcon icon={faCheck} className={validUsername ? 'valid' : 'hide'} />
                <FontAwesomeIcon icon={faTimes} className={validUsername || !username ? 'hide' : 'invalid'} />
            </label>
            <input 
                type='text' 
                id='username' 
                className='block-input'
                autoComplete='off'
                onChange={e => setUsername(e.target.value)}
                aria-invalid={validUsername ? 'false' : 'true'}
                aria-describedby='uidnote'
                onFocus={() => setUsernameFocus(true)}
                onBlur={() => setUsernameFocus(false)} 
                required 
            />
            <p id='uidnote' className={usernameFocus && username && !validUsername ? 'instructions' : 'offscreen'}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 letters <br/>
                    Must begin with a letter <br/>
                    Letters, underscore, numbers, hypens allowed.
            </p>

            <label htmlFor='password' className='block-label'> 
                Password:
                <FontAwesomeIcon icon={faCheck} className={validpassW ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validpassW || !passW? "hide" : "invalid"} />
            </label>
            <input 
                type='password'
                id='password'
                className='block-input' 
                onChange={e => setPassW(e.target.value)}
                value={passW}
                aria-invalid={validpassW ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setpassWFocus(true)}
                onBlur={() => setpassWFocus(false)}
                required
            />
            <p id="pwdnote" className={passWFocus && !validpassW ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>

            <label htmlFor='rememberMe' className='remember-me'>
            <input type='checkbox' id='rememberMe' name='rememberMe'/> Remember me
            </label>
            <a 
                href='/#'
                target='_blank'
                style={{display: 'block', margin: '3% 0'}}
                className='login-a'
            >
                Forgot password?
            </a>

            <button disabled={!validUsername || !validpassW ? true : false } >Login</button>
            <p className='mv-para-right'>
                Don't have an account?, please <Link to='Signup'>Signup</Link>
            </p>

    </form>
    </section> 
    );
}