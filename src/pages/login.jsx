import React, { useState } from 'react'
import img from "../assets/LoginRegister.png"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Login attempt:', { email, password })
    }
    return (
        <div className="flex items-center justify-center p-10">
            <img className="flex items-center justify-center w-full h-170" src={img} alt="Un carrito de compras desde el movil"/>
            
            <div className='flex flex-col  justify-center w-full ml-10 mr-10 p-10'>
            
                <h2 className="text-3xl font-semibold ml-4">Ingresa a Celuphone</h2>
                
                <h3 className='ml-4'>Ingresa aquí tu información</h3>
                    <form onSubmit={handleSubmit}>
                        <label>Correo electronico</label>
                        <input type="email" value={email} onChange={setEmail} placeholder="email@gmail.com" className="input-value"/>
                
                        <label>Contraseña</label>
                        <input label="Contraseña" type="password" value={password} onChange={setPassword} placeholder="*******" className="input-value"/>
                        
                        <button type="submit" className="boton-gradiente h-15 w-full rounded text-white text-xl font-semibold hover:boton-gradiente-hover">
                            <span className="button-text">Iniciar sesión</span>
                        </button>

                        <div className="text-center mt-10">
                            <p>¿Olvidaste la contraseña?</p>
                            <span>¿No tienes una cuenta?</span>
                            <a href="#" className="text-[var(--color-principal-500)] hover:font-bold"> Registrate aquí</a>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Login