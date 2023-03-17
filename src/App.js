import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Coins from './components/Coins';
import Details from './components/Details';
import NotMatch from './components/notMatch';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Coins />} />
          <Route path="/detail/:id" element={<Details />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
