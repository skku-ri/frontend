import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { Page } from './components';
import { ClubDetail } from './routes/ClubDetail';
import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { Message } from './routes/Message';
import { MyCard } from './routes/MyCard';
import { MyClub } from './routes/MyClub';
import { Playground } from './routes/Playground';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Page>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/playground' element={<Playground />} />
            <Route path='/mycard' element={<MyCard />} />
            <Route path='/myclub' element={<MyClub />} />
            <Route path='/club/:clubName' element={<ClubDetail />} />
            <Route path='/message' element={<Message />} />
            <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
        </Page>
      </BrowserRouter>
    </div>
  );
}

export default App;
