import React from 'react';
import App from './App';
import './main.css';

export default function Root(props: any) {
    return(
        <React.StrictMode>
            <App props />
        </React.StrictMode>
    )
}