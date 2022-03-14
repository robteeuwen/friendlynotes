import React, {Component} from 'react';
import NoteViewer from "./NoteViewer";
import RangeButton from "./RangeButton";
import {note_info} from "./NoteInfo";

class NoteGuesser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            last_response: 'none',
            streak: 0,
            question_number: 0,
            random_note_id: 0,

            note: {},

            ranges: {
                range3: true,
                range4: true,
                range5: true,
            }
        }
        this.handleResponse = this.handleResponse.bind(this)
        this.toggleRange = this.toggleRange.bind(this)
        this.updateNote = this.updateNote.bind(this)
    }

    updateNote() {
        // filter note info to only the ranges we selected
        // all_ranges will be in form: ['range3', 'range4'], containing all ranges that have been initialized
        let all_ranges = Object.keys(this.state.ranges)

        // ranges will be in form ['3', '4'] containing all ranges that are active
        let ranges = []
        for (let i = 0; i < all_ranges.length; i++) {
            if (Object.values(this.state.ranges)[i]) {
                let r = all_ranges[i]
                ranges.push(r[r.length - 1])
            }
        }

        // create a new note_info variable containing only notes in the active ranges
        let active_notes = note_info.filter(note => ranges.includes(note.range))

        let noteids = Object.keys(active_notes)
        const max = noteids.length
        const rand = Math.floor( Math.random() * max);
        this.setState({
            random_note_id: noteids[rand],
            note: active_notes[rand]
        });
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

    toggleRange(range) {
        let ranges = this.state.ranges
        ranges[range] = !this.state.ranges[range]
        this.setState({
            ranges: ranges
        }, () => {
            this.updateNote()
        })
    }

    componentDidMount() {
        this.updateNote()
    }

    render() {
        return (
            <div>
                <h2>last response: <span className={this.state.last_response}>{this.state.last_response}</span></h2>
                <h2>streak: {this.state.streak}</h2>
                <h2>#{this.state.question_number + 1}</h2>
                <div className="buttonBox">
                    <RangeButton toggleRange={this.toggleRange} range={'range3'} is_active={this.state.ranges.range3} />
                    <RangeButton toggleRange={this.toggleRange} range={'range4'} is_active={this.state.ranges.range4} />
                    <RangeButton toggleRange={this.toggleRange} range={'range5'} is_active={this.state.ranges.range5} />
                </div>
                <NoteViewer
                    handleResponse={this.handleResponse}
                    ranges={this.state.ranges}
                    updateNote={this.updateNote}
                    note={this.state.note}
                />
            </div>
        );
    }
}

export default NoteGuesser;