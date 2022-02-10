import { useNavigate } from 'react-router-dom';
import Link from './Link';
import useAuth from '../contexts/Auth';

function Header() {
  const { user, signin, signout } = useAuth();
  const navigate = useNavigate();

  const toggleLogin = () => {
    if(!!user) {
      signout();
    } else {
      signin({ id: 1, name: "John Cena" });
    }
  }

  return ( <div className="container-fluid c-header">
    <div className="row">
      <div className="col">
        <h1>React Bootstrap</h1>
      </div>

      <div className='col'>
        <div className="d-flex justify-content-end align-items-center h-100">
          <Link to="home">Home</Link>
          <Link to="login">Login</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
          <Link to="posts">Posts</Link>

          <button className={!!user ? "btn-danger" : "btn-primary"} onClick={toggleLogin}>{!!user ? "Logout" : "Login"}</button>
          <button className="btn btn-secondary" onClick={() => {
            // doSomething
            navigate('/posts')
          }}>programatically redirect</button>
        </div>
      </div>
    </div>
  </div> );
}

export default Header;
