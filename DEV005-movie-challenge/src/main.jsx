import React from 'react'
import ReactDOM from 'react-dom/client'
//import { Header, Footer } from './component'
import './main.module.css';
import { Home } from './home';


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <React.Fragment>
        <Home />
    </React.Fragment>
)

