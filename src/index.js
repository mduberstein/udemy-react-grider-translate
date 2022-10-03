import React from 'react';
import ReacDOM from 'react-dom'
import App from './components/App';
import {LanguageStore} from './components/contexts/LanguageContext'

ReacDOM.render(
<LanguageStore>
  <App />
</LanguageStore>, 
  document.querySelector('#root')
);