import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SingIn';
import SignUp from './pages/SingUp';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}>asdas</Route>
        <Route path="/about" element={<About></About>}>asdas</Route>
        <Route path="/signIn" element={<SignIn></SignIn>}>asdas</Route>
        <Route path="/signUp" element={<SignUp></SignUp>}>asdas</Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>asdas</Route>
        <Route path="/projects" element={<Projects></Projects>}>asdas</Route>
      </Routes>
    </BrowserRouter>
  );
}