import {Navbar, TextInput, Button, Dropdown, Avatar} from 'flowbite-react';
import {Link, useLocation } from "react-router-dom"; 
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function Header(){
    const path = useLocation().pathname;
    const { currentUser } = useSelector(state => state.user);
    return(
        <Navbar className='border-b-2'>
            {//Agregando el logo
            }
            <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-teal-500 text-dark'>Cristian's</span>
                Blog
            </Link>
            {//Agregando barra de busqueda en pantallas grandes
            }
            <form action="">
                <TextInput
                type='text'
                placeholder='Buscar...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
                />
            </form>
            {//Agregando barra de busqueda en pantallas pequeñas
            }
            <Button className="w-12 h-10 lg:hidden" color="gray" pill>
                <AiOutlineSearch/>
            </Button>
            <div className='flex gap-2 md:order-2'>
                {//Agregando botton de darkMode
                }
                <Button className='w-12 h-10 hidden sm:inline' color="gray" pill>
                    <FaMoon/>
                </Button>

                {//Condicional que despliega el boton de inicio de sesion o un menu con la informacion del usuario

                }
                {currentUser ? (
                    <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar
                            alt ="alt"
                            img= {currentUser.profilePicture}
                            rounded
                        />
                    }
                    >
                        <Dropdown.Header>
                            <span className='block text-sm'>@{currentUser.username}</span>
                            <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                        </Dropdown.Header>
                        <Link to={"/dashboard?tab=profile"}>
                            <Dropdown.Item>Perfil</Dropdown.Item>
                        </Link>
                        <Dropdown.Divider/>
                        <Dropdown.Item>Cerrar sesion</Dropdown.Item>
                    </Dropdown>
                ): 
                (
                <Link to="/signin">
                    <Button color="gray" outline>
                        Sign In
                    </Button>
                </Link>
                )}
               
                {//Agregando menu hamburguesa
                }
                 <Navbar.Toggle/>
            </div>
            {//agregando links para las diferentes paginas
            }
            <Navbar.Collapse>
                    <Navbar.Link active={path==="/"} as="div">
                        <Link to="/">
                            Home
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path==="/about"} as="div">
                        <Link to="/about">
                            About
                        </Link>
                    </Navbar.Link>
                    <Navbar.Link active={path==="/projects"} as="div">
                        <Link to="/projects">
                        Projects
                        </Link>
                    </Navbar.Link>
                </Navbar.Collapse>
        </Navbar>
    );
}