import { BrowserRouter } from 'react-router-dom';

import Router from './utils/router';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
