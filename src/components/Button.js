import React from "react";
import LanguageContext from "./contexts/LanguageContext";

class Button extends React.Component {
  // ALT 1
  // contextType is a special property name, must ber exactly that
  // once it is set, this.context will reference the value passed in React.createContext('english')
  // string 'english' in this case. It can be object like {color: 'red'}, or array [1, 2, 3]
  // like in React.createContext({color: 'red}); 
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    console.log("In Button->render(), this.context: ", this.context);
    return <button className="ui button primary">{text}</button>
  }
}

// ALT 2
// Button.contextType = LanguageContext;
export default Button;