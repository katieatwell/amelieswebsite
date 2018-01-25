import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import API from "../../utils/API";


class Blog extends Component {

    state = {
        blogs: [],
    };

    componentDidMount() {
        this.loadBlogs();
    }

    loadBlogs = () => {
        API.getBlog()
            .then(res => {
                console.log("$$$$$$$$$$$$$$$$$$$$$");
                console.log(res.data);
                this.setState({
                    blogs: res.data
                }, () => console.log(this.state));
            })
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
                        <br/><br/>
                        {this.state.blogs.map( (blog) => {
                            return (
                                <div key={blog.id}>
                                    <h1>{ blog.title } </h1> <br/>
                                    <h3> { blog.date } </h3> <br/>
                                    <p>{ blog.summary } </p><br/><br/><br/>
                                </div>
                            );
                        }
                        )}
                    </PanelBody>
                </MainPanel>
            </Wrapper>
        );
    }
}

export default Blog;
