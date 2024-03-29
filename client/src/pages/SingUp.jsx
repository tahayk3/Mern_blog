import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export default function SingUp(){

    const [formData,setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e){
        setFormData({
            ...formData, 
            [e.target.id]: e.target.value.trim()
        });
    }
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!formData.username || !formData.email || !formData.password){
            return setErrorMessage("Por favor, ingresa todos los datos requeridos");
        }
        try{    
            setIsLoading(true);
            setErrorMessage(null);
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.success === false){
                return setErrorMessage(data.message);
            }
            setIsLoading(false);
            if(res.ok){
                navigate("/signin");
            }
        }catch(error){
            setErrorMessage(error.message);
            setIsLoading(false);
        }
    };

    return(
        <div className="min-h-screen mt-20">
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
                {/* left*/}
                <div className="flex-1">
                    <Link to="/" className='font-bold dark:text-white text-4xl'>
                        <span className='px-2 py-1 bg-gradient-to-r from-teal-500 text-dark'>Cristian's</span>
                        Blog
                    </Link>
                    <p className="text-sm mt-5">Puedes registrate con un correo electronico y contraseña o con Google</p>
                </div>
            
                {/*right */}
                <div className="flex-1">
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div>
                            <Label value="Nombre de usuario"></Label>
                            <TextInput
                                type="text"
                                placeholder="Ingresa tu nombre de usuario"
                                id="username"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label value="Correo electronico"></Label>
                            <TextInput
                                type="email"
                                placeholder="Ingresa tu correo electronico"
                                id="email"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <Label value="Contraseña"></Label>
                            <TextInput
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                id="password"
                                onChange={handleChange}
                            />
                        </div>
                        <Button type="submit" disabled={isLoading}>
                            {
                                isLoading ? (
                                   <>
                                        <Spinner size="sm"/>
                                        <span className='pl-3'>Cargando...</span>
                                   </>
                                ):  "Sign up"
                            }
                        </Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5">
                        <span>Ingresar</span>
                        <Link to="/signin" className="text-blue-500">
                            Sign In
                        </Link>
                    </div>
                    {
                        errorMessage && (
                            <Alert className='mt-5' color="failure">
                                {errorMessage}
                            </Alert>
                        )
                    }
                </div>
            </div>
        </div>
    );
}