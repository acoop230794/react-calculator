import React, { Component } from 'react'
import './Result.css';

export default class ResultComponent extends Component {
    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
        )
    }
}
