import React, { Component } from "react";

class Song extends Component {


    render() {
        return (
            <div className="song">
                <h2>{this.props.title}</h2>
                <p>{this.props.artist}</p>
                <p>{this.props.duration}</p>
            </div>
        )
    }
}

export default Song;