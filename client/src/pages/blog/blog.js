import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { Link } from "react-router-dom";
import API from "../../utils/API";


class Blog extends Component {

    state = {
        blogs: []
    };

    componentDidMount() {
        this.loadBlogs();
    }

    loadBlogs = () => {
        API.getBlog()
            .then(res => {
                this.setState({
                    blogs: res.data
                });
            })
            .catch(err => console.log("bad data"));
    };

    render() {
        return (
            <Wrapper>
                <MainPanel>
                    <PanelTitle>
                        Amélie's Blog
                    </PanelTitle>
                    
                    <PanelBody>
                        
                        {this.state.blogs.map(blog => (
                            <div key= {blog.id} >
                                <h1> { blog.title } </h1> <br/>
                                <h3> { blog.dateUnparsed } </h3> <br/>
                                <p> { blog.summary } </p><br/>
                                <Link to={"http://www.ameliesfrenchbakery.com" + blog.link}>Link</Link>
                            </div>
                            )
                        )}
                    </PanelBody>
                </MainPanel>
            </Wrapper>
        );
    }
}

export default Blog;
