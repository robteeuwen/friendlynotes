import './App.css';
import NoteViewer from "./components/NoteViewer";
import NoteGuesser from "./components/NoteGuesser";

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
