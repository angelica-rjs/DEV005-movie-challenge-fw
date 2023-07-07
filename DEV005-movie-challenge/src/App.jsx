import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home'
import { Films } from './pages/Films';
import { Series } from './pages/Series';
import { NotFound } from './pages/NotFound';

export const App = ()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Films" element={<Films/>}/>
        <Route path="/Series" element={<Series/>}/>
        <Route path="/*" element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}