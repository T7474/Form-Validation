import './FormComponent.css'
import { useState } from 'react'

const FormComponent = () => {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [repassword,setRepassword] = useState('')

    const [errorUsername,setErrorUsername] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorRePassword,setErrorRePassword] = useState('')

    const [usernameColor,setUsernameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [repasswordColor,setRepasswordColor] = useState('')

    const validateForm = (e) => {
        e.preventDefault()
        if (username.length >= 8) {
            setErrorUsername ('')
            setUsernameColor('green')
        }else {
            setErrorUsername('กรุณาป้อนชื่อผู้ใช้อย่างน้อย 8 ตัวอักษร')
            setUsernameColor('red')
        }

        if (email.includes("@")) {
            setErrorEmail("")
            setEmailColor('green')
        }else {
            setErrorEmail("รูปแบบอีเมลไม่ถูกต้อง")
            setEmailColor('red')
        }

        if (password.length >= 8){
            setErrorPassword('')
            setPasswordColor('green')
        }else {
            setErrorPassword("รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร")
            setPasswordColor('red')
        }

        if(repassword != " " && repassword === password) {
            setErrorRePassword('')
            setRepasswordColor('green')
        }else{
            setErrorRePassword('รหัสผ่านไม่ตรงกัน')
            setRepasswordColor('red')
        }
    }
    return (
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>Register Form</h2>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} style={{borderColor:usernameColor}}/>
                    <small style={{color:usernameColor}}>{errorUsername}</small>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>Confirm Password</label>
                    <input type="password" value={repassword} onChange={(e)=>setRepassword(e.target.value)} style={{borderColor:repasswordColor}}/>
                    <small style={{color:repasswordColor}}>{errorRePassword}</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default FormComponent