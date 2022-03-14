import React, {Component} from 'react';
import {note_info} from './NoteInfo.js';
import {notes} from './NoteInfo';

class NoteViewer extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(note) {
        /**
         * handles clicking on a note to answer the challenge
         *
         * input
         * - note (str)  in the form 'B' or 'C', etc
         */
        const shown_note = this.props.note.note
        if (shown_note == note) {
            console.log('correct')
            this.props.handleResponse(1)
        } else {
            console.log('false')
            this.props.handleResponse(0)
        }

        this.props.updateNote()
    }

    render() {
        return (
            <div className="fullwidth">
                <div className="noteContainer">
                    <img className="noteImage" src={this.props.note.object} alt={this.props.note.name} />
                </div>
                <div className="buttonBox">
                    {notes.map((val, idx) => {
                        return <div key={idx} onClick={() => this.handleClick(val)} className="noteButton">{val}</div>
                    })}
                </div>
            </div>
        );
    }
}

export default NoteViewer;