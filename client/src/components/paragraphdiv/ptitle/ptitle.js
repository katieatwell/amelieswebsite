import React from 'react';
import "./style.css";

const PanelTitle = props =>
  <div className="ptitle">
    {props.children}
    <hr/>
  </div>;

export default PanelTitle;
