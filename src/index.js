import React from 'react';
import ReactDOM from 'react-dom'
import {SpeechProvider} from '@speechly/react-client'

import App from './App';
import './index.css'
import {Provider} from './context/context'

ReactDOM.render(
    <SpeechProvider appId='91e2111d-3520-4f03-8b98-77f0aec50105' language='en-US' >
    <Provider>
    <App/>
    </Provider>
    </SpeechProvider>,
    document.getElementById('root')
)