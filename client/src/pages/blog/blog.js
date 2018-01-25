import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import API from "../../utils/API";


class Blog extends Component {

    state = {
        blogs: []
    };


    loadBlogs = () => {
        API.getBlog()
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Wrapper>
                <MainPanel>
                    <PanelTitle>
                        Amélie's Blog
                    </PanelTitle>
                    
                    <PanelBody>
                        Web scraping content
                        <br/>
                        {this.state.blogs}
                    </PanelBody>
                </MainPanel>
            </Wrapper>
        );
    }
}

export default Blog;
