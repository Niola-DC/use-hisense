// import './App.css';
import ContactUsPage from './pages/contactuspage';
import HomePage from './pages/homepage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <HomePage /> */}
      <ContactUsPage />
    </BrowserRouter>
  );
}

export default App;
