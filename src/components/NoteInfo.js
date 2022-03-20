import A3 from '../assets/A3.svg'
import A4 from '../assets/A4.svg'
import A5 from '../assets/A5.svg'
import B3 from '../assets/B3.svg'
import B4 from '../assets/B4.svg'
import B5 from '../assets/B5.svg'
import C3 from '../assets/C3.svg'
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

const _notes = {
    'A3': A3,
    'A4': A4,
    'A5': A5,
    'B3': B3,
    'B4': B4,
    'B5': B5,
    'C3': C3,
    'C4': C4,
    'C5': C5,
    'D3': D3,
    'D4': D4,
    'D5': D5,
    'E3': E3,
    'E4': E4,
    'E5': E5,
    'F3': F3,
    'F4': F4,
    'F5': F5,
    'G3': G3,
    'G4': G4,
    'G5': G5,
}

const ranges = ['3', '4', '5'];
const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

let note_info = Array()

let counter = 0
ranges.forEach(range => {
    notes.forEach(note => {
        note_info.push({
            'object': _notes[note + range],
            'name': note + range,
            'note': note,
            'range': range,
            'score': 0,
            'times_challenged': 0,
            'times_correct': 0,
            'index': counter,
        })
        counter = counter + 1
    })
})

export { note_info }
export { notes }