import React, {Component} from "react";

class RedBlue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color1: "red",
            color2: "blue"
        }

        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }

    handleClick1() {
        this.setState({
            color1: this.state.color1 === "red" ? "blue" : "red"
        });
    }
    handleClick2() {
        this.setState({
            color2: this.state.color2 === "blue" ? "red" : "blue"
        });
    }

    render() {
        return(
            <div className="square">
                <button className="red" style={{background: this.state.color1}} onClick={this.handleClick1}></button>
                <button className="blue" style={{background: this.state.color2}} onClick={this.handleClick2}></button>
            </div>
        )
    }
}



export default RedBlue;

