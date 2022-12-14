import React from "react";
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";

class Button extends React.Component {
  // // ALT 1 this.context
  // // contextType is a special property name, must ber exactly that
  // // once it is set, this.context will reference the value passed in React.createContext('english')
  // // string 'english' in this case. It can be object like {color: 'red'}, or array [1, 2, 3]
  // // like in React.createContext({color: 'red}); 
  // static contextType = LanguageContext;

  // ALT 3 Consumer
  renderSubmit (language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({language}) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)
        }
      </ColorContext.Consumer>
    );
    // // ALT 1 and 2 this.context
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    // console.log("In Button->render(), this.context: ", this.context);
    // return <button className="ui button primary">{text}</button>
  }
}

// ALT 2 - this.context
// Button.contextType = LanguageContext;
export default Button;