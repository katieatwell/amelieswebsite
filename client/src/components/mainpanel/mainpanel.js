import React from "react";
import "./style.css"

class MainPanel extends React.Component {
    render() {
        return (
                <div className=".col .col-sm-12 .col-md-10 .col-md-offset-1" id="MainPanel">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>
        );
    }
}


export default MainPanel;