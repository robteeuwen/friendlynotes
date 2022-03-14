import React, {Component} from 'react';
import {note_info} from './NoteInfo.js';
import {notes} from './NoteInfo';

class NoteViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            random_note_id: 0
        }
    }

    updateNote() {
        let noteids = Object.keys(note_info)
        const max = noteids.length
        const rand = Math.floor( Math.random() * max);
        this.setState({ random_note_id: noteids[rand] });
    }

    handleClick(note) {
        const shown_note = note_info[this.state.random_note_id].note
        if (shown_note == note) {
            console.log('correct')
            this.props.handleResponse(1)
        } else {
            console.log('false')
            this.props.handleResponse(0)
        }

        this.updateNote()
    }

    componentDidMount() {
        this.updateNote()
    }

    render() {
        return (
            <div className="fullwidth">
                <div className="noteContainer">
                    <img className="noteImage" src={note_info[this.state.random_note_id].object} alt={note_info[this.state.random_note_id].name} />
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