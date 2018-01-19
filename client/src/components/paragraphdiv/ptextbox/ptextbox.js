import React from 'react';
import "./style.css";

const PanelTextBox = props =>
  <div className="ptextbox">
    {props.children}
  </div>;
  
export default PanelTextBox;