import React, { Component } from 'react';
import NavBar from "../../components/navbar";
import Container from "../../components/container";
import Footer from "../../components/footer";


class Wrapper extends Component {
    render() {
        return (
            <div>
                <NavBar />
                    <Container>
                        {this.props.children}
                    </Container>
            </div>
        );
    }
}

export default Wrapper;
