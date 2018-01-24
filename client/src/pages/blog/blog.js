import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";


class Blog extends Component {

    render() {
        return (
            <Wrapper>
                <MainPanel>
                    <PanelTitle>
                        Amélie's Blog
                    </PanelTitle>
                    
                    <PanelBody>
                        Web scraping content
                    </PanelBody>
                </MainPanel>
            </Wrapper>
        );
    }
}

export default Blog;
