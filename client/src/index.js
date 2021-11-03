import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import { CookiesProvider } from 'react-cookie';

export const Context = createContext(null)

ReactDOM.render(
    <CookiesProvider>
        <Context.Provider value={{
            user: new UserStore(),
            device: new DeviceStore(),
        }}>
            <App />
        </Context.Provider>,
    </CookiesProvider>,
    document.getElementById('root')
);

