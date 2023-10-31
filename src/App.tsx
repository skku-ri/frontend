import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { Home } from './routes/Home';
import { Playground } from './routes/Playground';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/playground' element={<Playground />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
