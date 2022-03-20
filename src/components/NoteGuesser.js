import React, {Component} from 'react';
import NoteViewer from "./NoteViewer";
import RangeButton from "./RangeButton";
import {note_info} from "./NoteInfo";
import DataViewer from "./DataViewer";

class NoteGuesser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            last_response: 'none',
            streak: 0,
            question_number: 0,

            note: {},

            ranges: {
                range3: true,
                range4: true,
                range5: true,
            },

            note_info: note_info,
        }
        this.handleResponse = this.handleResponse.bind(this)
        this.toggleRange = this.toggleRange.bind(this)
        this.updateNote = this.updateNote.bind(this)
    }

    updateNote() {
        /**
         * selects a note to be displayed in the next challenge.
         *
         * this is based on active ranges.
         *
         * @type {string[]}
         */
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
            note: active_notes[rand]
        });
    }

    handleResponse(result) {
        let _note_info = this.state.note_info
        let i = this.state.note.index
        _note_info[i].times_challenged = _note_info[i].times_challenged + 1

        if (result === 1) {
            _note_info[i].times_correct = _note_info[i].times_correct + 1
            _note_info[i].score = _note_info[i].times_correct / _note_info[i].times_challenged

            this.setState(prevState => ({
                last_response: 'correct',
                streak: prevState.streak + 1,
                question_number: prevState.question_number + 1,
                note_info: _note_info,
            }))
        } else {
            _note_info[i].score = _note_info[i].times_correct / _note_info[i].times_challenged

            this.setState(prevState => ({
                last_response: 'false',
                streak: 0,
                question_number: prevState.question_number + 1,
                note_info: _note_info,
            }))
        }
    }

    toggleRange(range) {
        let new_ranges = this.state.ranges
        new_ranges[range] = !this.state.ranges[range]

        this.setState({
            ranges: new_ranges
        })
    }

    componentDidMount() {
        this.updateNote()
    }

    render() {
        console.log(note_info)
        // check if at least 1 range is active
        let active_ranges = Object.values(this.state.ranges).filter(Boolean).length
        let noteviewer
        if (active_ranges > 0) {
            noteviewer = <NoteViewer
                handleResponse={this.handleResponse}
                ranges={this.state.ranges}
                updateNote={this.updateNote}
                note={this.state.note}
            />
        } else {
            noteviewer = <div>You must select at least 1 range</div>
        }
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
                {noteviewer}
                <DataViewer note_info={this.state.note_info} />
            </div>
        );
    }
}

export default NoteGuesser;