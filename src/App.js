import './App.css';
import NoteViewer from "./components/NoteViewer";
import NoteGuesser from "./components/NoteGuesser";
import amplitude from 'amplitude-js';

var ampl = amplitude.getInstance().init("bdfe06abbf21ef84b5f386b8a63c2429");
amplitude.getInstance().logEvent('Viewed Home Page');

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h1>Friendly Notes</h1>
                </div>
            </header>

            <NoteGuesser />

        </div>
    );
}

export default App;
