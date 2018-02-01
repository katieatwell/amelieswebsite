import React, { Component } from "react";
import Wrapper from "../../components/wrapper";
import MainPanel from "../../components/mainpanel/mainpanel";
import PanelTitle from "../../components/paragraphdiv/ptitle";
import PanelBody from "../../components/paragraphdiv/ptextbox";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./style.css";


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

    titleCase = (str) => {
        str = str.toLowerCase().split(' ');

        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].split('');
            str[i][0] = str[i][0].toUpperCase();
            str[i] = str[i].join('');
        }
        return str.join(' ');
    }

    render() {
        return (
            <Wrapper>
                <MainPanel>
                    <PanelTitle>
                        Amélie's Blog
                    </PanelTitle>
                    <PanelBody>
                        
                            {this.state.blogs.map(blog => (
                                <div key= {blog.id} className ="blogEntry">
                                    <img src="./display_images/blogbanner.png" width="80%" height="40%" />
                                    
                                    <div className="blogTitle"> 
                                        { this.titleCase( blog.title ) }
                                    </div> 
                                    
                                    <div className="blogDate"> 
                                        { blog.dateUnparsed } 
                                    </div> 
                                    
                                    <div> 
                                        { this.titleCase ( blog.summary ) }
                                    <Link to={"http://www.ameliesfrenchbakery.com" + blog.link} target="_blank" className="blogLink">Read More</Link>
                                    </div>
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
