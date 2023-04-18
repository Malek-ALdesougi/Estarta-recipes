import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//MDB Bootstrap
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

//redux store
import store from './redux/store';

import App from './App';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
