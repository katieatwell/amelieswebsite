import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// This changes Quill from using class ="ql-align-<center or right>" to define
// text justification to using style = "text-align: <center or right>"
const AlignStyle = Quill.import('attributors/style/align');
Quill.register(AlignStyle, true);

// Future: There is not an inline style option for indent.  
// In order to accomodate indent, we need a custom css that styles indents based on the element class.
// const IndentStyle = Quill.import('attributors/style/indent');
// Quill.register(IndentStyle, true);

class QuillEditor extends React.Component {
  constructor(props) {
    super(props);
    console.log("Quill props: " + JSON.stringify(props));
    this.state = { html: props.value || "" }; //Future: html will be pre-filled based on user selection
    this.modules = {
      toolbar: [ // Formats included in the Quill editor toolbar
        ['bold', 'italic', 'underline'],
        [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }],
        [{ 'header': [2, 3, 4, false] }],
        // [{ 'indent': '+1' }, { 'indent': '-1' }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }]
      ]
    };
    this.formats = [ // Formats that the  Quill editor will allow
      'bold',
      'italic',
      'underline',
      'align',
      'header',
      // 'indent',
      'list',
    ];
  }

  handleChange = (value) => {
    this.setState({ html: value });
    //CREATE TERNARY OPERATOR FOR THESE
    if (this.props.useCake === true) {
      this.props.updateCurrentCake(value);
    }
    if (this.props.useCafe === true) {
      this.props.updateCafeState(value);
    }
    if (this.props.useCater === true) {
      this.props.updateCaterState(value);
    }
  }

  render() {
    return <ReactQuill value={this.state.html} onChange={this.handleChange} modules={this.modules} formats={this.formats}/>;
  }
}

export default QuillEditor;
