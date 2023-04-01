import ReactDOM from 'react-dom/client'
import React from "react";
import App from './App';
import './_base.scss';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store'
import { BrowserRouter as Router } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-lazy-load-image-component/src/effects/blur.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

// ReactDOM.render(

//     <Provider store={store}>
//         <Router>
//             <App />
//         </Router>
//     </Provider>


//     , document.getElementById('root'))