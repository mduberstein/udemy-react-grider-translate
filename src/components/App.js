import React from 'react'
import UserCreate from './UserCreate';
import LanguageContext from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className="ui container">
          <LanguageSelector  />
          <ColorContext.Provider value={this.context.color}>
              <UserCreate />
          </ColorContext.Provider>
      </div>
    );
  }
}

export default App;