import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainProvider from './context/MainContext';

import Layout from './components/Layout';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Anime from './pages/Anime';
import Profile from './pages/Profile';
import Search from './pages/Search';

const App = () => {
    return (
        <MainProvider>
            <BrowserRouter basename='/copie_myanimelist_react'>
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/anime/:id' element={<Anime />} />
                        <Route path='/profile/:username' element={<Profile />} />
                        <Route path='/search/:title' element={<Search />} />
                        <Route path='*' element={<h1>Error</h1>} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </MainProvider>
    );
};

export default App;
