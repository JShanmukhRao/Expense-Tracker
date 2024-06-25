import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/home/Home.view';
import { BrowserRouter } from 'react-router-dom';
import TrackerDetail from './views/tracker/TrackerDetail';
import './styles/index.scss'
import TransactionDetails from './views/transaction/TransactionDetail';
import AddTransaction from './views/transaction/AddTransaction';
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracker/:id" element={<TrackerDetail />} />
          <Route path="/tracker/:id/transaction" element={<TransactionDetails />} />
          <Route path="/tracker/:id/transaction/add" element={<AddTransaction />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
