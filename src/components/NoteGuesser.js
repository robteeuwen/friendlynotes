import React, {Component} from 'react';
import NoteViewer from "./NoteViewer";

class NoteGuesser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            last_response: 'none',
            streak: 0,
            question_number: 0
        }
        this.handleResponse = this.handleResponse.bind(this);
    }

    handleResponse(result) {
        if (result === 1) {
            this.setState(prevState => ({
                last_response: 'correct',
                streak: prevState.streak + 1,
                question_number: prevState.question_number + 1,
            }))
        } else {
            this.setState(prevState => ({
                last_response: 'false',
                streak: 0,
                question_number: prevState.question_number + 1,
            }))
        }
    }

    render() {
        return (
            <div>
                <h2>last response: <span className={this.state.last_response}>{this.state.last_response}</span></h2>
                <h2>streak: {this.state.streak}</h2>
                <h2>#{this.state.question_number + 1}</h2>
                <NoteViewer handleResponse={this.handleResponse} />
            </div>
        );
    }
}

export default NoteGuesser;