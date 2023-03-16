import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import City from './components/city';
import Detail from './components/detail';
import NotMatch from './components/notMatch';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<City />} />
          <Route path="/detail/:name/:lat/:lon" element={<Detail />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
