import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { 
  About,
  Contact,
  Home,
  Login,
  Posts,
  NotFound,
} from './pages';

import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';

export default function CustomRoutes() {
  return <Router>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="about" element={<About />}/>
        <Route path="posts" element={<RequireAuth><Posts /></RequireAuth>}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  </Router>
}
