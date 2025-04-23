/// <reference types="jquery" />
import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { HelmetProvider } from 'react-helmet-async'
import rootReducer from './store/reducers/rootReducer'
import App from './App'

// Import jQuery and easing
import $ from 'jquery'
import 'jquery.easing'

// Style imports
import 'normalize.css'
import 'animate.css/animate.css'
import './style.scss'
import 'bootstrap/js/dist/collapse'
// Extend the Window interface to include jQuery and $
declare global {
    interface Window {
        jQuery: typeof $;
        $: typeof $;
    }
}

// Make jQuery available globally
window.jQuery = window.$ = $

const store = createStore(rootReducer, {})
const container = document.getElementById('root')

if (container) {
    const root = createRoot(container)
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <HelmetProvider>
                    <App />
                </HelmetProvider>
            </Provider>
        </React.StrictMode>
    )
}
