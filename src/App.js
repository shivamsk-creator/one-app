import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Formt from './components/Formt';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);

  }




  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      console.log("dark mode enabled");
      document.body.style.backgroundColor = '#283397';
      showalert("Dark Mode Enabled", "success");
    }
    else {
      setMode('light');
      console.log("dark mode disabled");
      document.body.style.backgroundColor = 'white';
      showalert("Dark Mode Disabled", "danger");
    }
  }


  return (
    <>
        <Navbar title="Text Play" aboutText="About" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <div className="form my-4">
              <Formt heading="Enter your text to Analyze" mode={mode} showalert={showalert} />
        </div>
    </>
  );
}

export default App;
