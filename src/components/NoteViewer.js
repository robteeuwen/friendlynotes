import React, {Component} from 'react';
import A3 from '../assets/A3.svg'
import A4 from '../assets/A4.svg'
import A5 from '../assets/A5.svg'
import B3 from '../assets/B3.svg'
import B4 from '../assets/B4.svg'
import B5 from '../assets/B5.svg'
import C4 from '../assets/C4.svg'
import C5 from '../assets/C5.svg'
import D3 from '../assets/D3.svg'
import D4 from '../assets/D4.svg'
import D5 from '../assets/D5.svg'
import E3 from '../assets/E3.svg'
import E4 from '../assets/E4.svg'
import E5 from '../assets/E5.svg'
import F3 from '../assets/F3.svg'
import F4 from '../assets/F4.svg'
import F5 from '../assets/F5.svg'
import G3 from '../assets/G3.svg'
import G4 from '../assets/G4.svg'
import G5 from '../assets/G5.svg'

const notes = {
    'D3': D3,
    'E3': E3,
    'F3': F3,
    'G3': G3,
    'A3': A3,
    'B3': B3,
    'C4': C4,
    'D4': D4,
    'E4': E4,
    'F4': F4,
    'G4': G4,
    'A4': A4,
    'B4': B4,
    'C5': C5,
    'D5': D5,
    'E5': E5,
    'F5': F5,
    'G5': G5,
    'A5': A5,
    'B5': B5,
}

const note_options = ['A', 'B', 'C', 'D', 'E', 'F', 'G']


class NoteViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            random_note_id: 0
        }
    }

    updateNote() {
        let noteids = Object.keys(notes)
        const max = noteids.length
        const rand = Math.floor( Math.random() * max);
        this.setState({ random_note_id: noteids[rand] });
    }

    handleClick(note) {
        if (this.state.random_note_id[0] == note) {
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
                    <img className="noteImage" src={notes[this.state.random_note_id]} alt={"note"} />
                </div>
                <div className="buttonBox">
                    {note_options.map((val, idx) => {
                        return <div key={idx} onClick={() => this.handleClick(val)} className="noteButton">{val}</div>
                    })}
                </div>
            </div>
        );
    }
}

export default NoteViewer;