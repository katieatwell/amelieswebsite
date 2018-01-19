import React from 'react';
import "./style.css";

const PanelBody = props =>
  <div className="ptextbox">
    {props.children}
  </div>;
  
export default PanelBody;