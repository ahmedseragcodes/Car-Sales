import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css';
import './styles.scss';
import { Provider } from "react-redux";
import { reducer } from "../src/reducers/featureReducer";
import { createStore } from 'redux';

const store=createStore(reducer);



const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);
