import './App.css';
import CustomRoutes from './routes';
import { AuthProvider } from './contexts/Auth';

function App() {
  return (     
    <AuthProvider> 
      <CustomRoutes />
    </AuthProvider>
  );
}

export default App;
