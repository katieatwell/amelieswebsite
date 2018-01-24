import React, { Component } from 'react';
// import EntirePage from "../../components/entirepage";
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
                <Footer/>
            </div>
        );
    }
}

export default Wrapper;
