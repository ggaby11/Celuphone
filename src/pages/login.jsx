import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Login attempt:', { email, password })
    }
    return (
        <div className="login-page">
            <div className="background-image"></div>
            <div className="rotated-image"></div>
            <div className="design-front"></div>
            <h1 className="login-title">Iniciar sesión</h1>

            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <label className="input-label">Email</label>
                    <div className="input-container">
                        <input type="email" value={email} onChange={setEmail} placeholder="email@gmail.com" className="input-value"/>
                    </div>
                    <label className="input-label">Contraseña</label>
                    <div className="input-container">
                        <input label="Contraseña" type="password" value={password} onChange={setPassword} placeholder="*******" className="input-value"/>
                    </div>
                    <button type="submit" className="login-button">
                        <span className="button-text">Ingresar</span>
                    </button>
                    
                </div>
                <div className="text-link">
                    <p className="forgot-password">¿Olvidaste la contraseña?</p>
                    <div className="register-section">
                        <span className="no-account">¿No tienes una cuenta?</span>
                        <a href="#" className="register-link">Registrate aquí</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login