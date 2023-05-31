import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import { faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Using regex to filter the input values
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =  /^[a-zA-Z][a-zA-Z0-9-_]{13,33}$/;

export default function Signup() {
    const firstNameRef = useRef(); //Set focus on the first name when the components loads
    const lastNameRef = useRef();
    const mailRef = useRef();
    const errRef = useRef(); //Set focus on error msg by the screen reader


    const [firstName, setFirstName] = useState(''); // time due to user input
    const [validNameOne, setValidNameOne] = useState(false); // validate username
    const [userFocusOne, setUserFocusOne] = useState(false); // set focus on input field

    const [secondName, setSecondName] = useState(''); // time due to user input
    const [validNameTwo, setValidNameTwo] = useState(false); // validate username
    const [userFocusTwo, setUserFocusTwo] = useState(false); // set focus on input field

    const [mail, setMail] = useState('');
    const [validMail, setValidMail] = useState(false);
    const [mailFocus, setMailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

   // const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        firstNameRef.current.focus();
    }, [])

    useEffect(() => {
        lastNameRef.current.focus();
    }, [])


    useEffect(() => {
        const result = USER_REGEX.test(firstName);
        console.log(result);
        console.log(firstName);
        setValidNameOne(result);
    }, [firstName])

    useEffect(() => {
        const result = USER_REGEX.test(secondName);
        console.log(result);
        console.log(secondName);
        setValidNameTwo(result);
    }, [secondName])

    useEffect(() => {
        const result = EMAIL_REGEX.test(mail);
        console.log(result);
        console.log(mail);
        setValidMail(result);
    }, [mail])

    useEffect(() =>{
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [firstName, secondName,mail, pwd, matchPwd])

    return (
        <>
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}
                aria-live='assertive'
            > {errMsg}</p>
            <h3>Signup: </h3>
            <form>
                {/* First name */}
                <label htmlFor='firstname'>
                    Firstname:
                        <FontAwesomeIcon 
                            icon={faCheck} 
                            className={validNameOne ? 'valid' : 'hide'}
                        />
                        <FontAwesomeIcon 
                            icon={faTimes} 
                            className={validNameOne || !firstName ? 'hide' : 'invalid'}    
                        />
                </label>
                <input 
                    type='text' 
                    id='firstname' 
                    ref={firstNameRef}
                    autoComplete='off'
                    onChange={(e) => setFirstName(e.target.value)}
                    aria-invalid = {validNameOne ? 'false' : 'true'}
                    aria-describedby='uidnote'
                    onFocus={() => setUserFocusOne(true)}
                    onBlur={() => setUserFocusOne(false)}
                    required
                />
                <p id='uidnote' className={userFocusOne && firstName && !validNameOne ? 'instructions' : 'offscreen'}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 letters <br/>
                    Must begin with a letter <br/>
                    Letters, underscore, numbers, hypens allowed.
                </p>

                {/* Second Name */}
                <label htmlFor='lastname'>
                    Lastname: 
                    <FontAwesomeIcon icon={faCheck} className={validNameTwo ? 'valid' : 'hide'} />
                    <FontAwesomeIcon icon={faTimes} className={validNameTwo || !secondName ? 'hide' : 'invalid'} />
                </label>
                <input 
                    type='text'
                    id='lastname'
                    ref={lastNameRef}
                    autoComplete='off'
                    onChange={e => setSecondName(e.target.value)}
                    aria-invalid={validNameTwo ? 'false' : 'true'}
                    aria-describedby='uidnote'
                    onFocus={() => setUserFocusTwo(true)}
                    onBlur={() => setUserFocusTwo(false)}
                    required
                />
                <p id='uidnote' className={userFocusTwo && secondName && !validNameTwo ? 'instructions' : 'offscreen'}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 letters <br/>
                    Must begin with a letter <br/>
                    Letters, underscore, numbers, hypens allowed.
                </p>

                {/* email */}
                <label htmlFor='email'>
                    Email:
                    <FontAwesomeIcon icon={faCheck} className={validMail ? 'valid' : 'hide'} />
                    <FontAwesomeIcon icon={faTimes} className={validMail || !mail ? 'hide' : 'invalid'} />
                </label>
                <input 
                    type='email'
                    id='email'
                    ref={mailRef}
                    autoComplete='off'
                    onChange={e => setMail(e.target.value)}
                    aria-invalid={validMail ? 'false' : 'true'}
                    aria-describedby='uidnote'
                    onFocus={() => setMailFocus(true)}
                    onBlur={() => setMailFocus(false)}
                    required
                />
                <p id='uidnote' className={mailFocus && mail && !validMail ? 'instructions' : 'offscreen'}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    12 to 32 letters <br/>
                    Must begin with a small letter <br/>
                    Letters, underscore, numbers, hypens, period allowed.
                </p>

                {/* Password */}
                <label htmlFor="password">
                        Password:
                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                        <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                </label>
                <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                {/* confirm password */}
                <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                </label>
                <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                </p>


                <label htmlFor='male'> <input type='radio' name='male-female' id='male-female'/> Male</label>
                <label htmlFor='female'> <input type='radio' name='male-female' id='male-female'/> Female</label>

                <label htmlFor='department'>Choose your programme: </label>
                <select defaultValue={'default'} id='dept-options' required>
                    <option value="default" disabled>Choose a department ...</option>
                    <option value={'1'}>Languages Education</option>
                    <option value={'2'}>Interdisplinary Studies</option>
                    <option value={'3'}>Fashion & textiles</option>
                    <option value={'4'}>Hospitality & tourism</option>
                    <option value={'5'}>Management Education</option>
                    <option value={'6'}>Accounting Education</option>
                    <option value={'7'}>Mathematics Education</option>
                    <option value={'8'}>Information Technology Education</option>
                    <option value={'9'}>Mech & Auto</option>
                    <option value={'10'}>Contruction & Wood</option>
                    <option value={'11'}>Electrical & Electronics</option>
                </select>

                <button 
                    disabled={!validNameOne || !validNameTwo || !validMail || !validPwd || !validMatch ? true : false}
                >
                    Sign Up
                </button>

            </form>

            <p>
                        Already registered?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/#">Sign In</a>
                        </span>
            </p>

        </section>
    </>
    );
}