//sviet.js//
export default function Sviet(props)
{
    return(
        <div>
            <h1>
                {props.title}
            </h1>
        </div>
    );
}

//App.js//
import './App.css';
import Sviet from './sviet.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://www.sviet.edu.in/wp-content/uploads/2023/05/SVIET-LOGO-Edited.png"} className="App-logo" alt="logo"/>
        <p>
          Sri Vasavi Institute Of Engineering & Technology
        </p>
        <a
          className="App-link"
          href="https://www.sviet.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To Page
        </a>
        <Sviet title="Empowering Minds" />
      </header>
    </div>
  );
}

export default App;
