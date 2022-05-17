import "./App.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness6RoundedIcon from "@mui/icons-material/Brightness6Rounded";
function App() {
  const changeTheme = () => {
    document.body.classList.toggle("dark");
    //console.log(document.body.classList);
  };
  return (
    <div className="App">
      <h1 className="title">Theme Swapper</h1>
      <div className="btn">
        <button className="theme-toggle" onClick={changeTheme}>
          <Brightness6RoundedIcon className="icon" sx={{ fontSize: 40 }} />
          <h3> Swap Themes</h3>
        </button>
      </div>
      <div className="sun-moon-container">
        <WbSunnyIcon className="sun" sx={{ fontSize: 60 }} />
        <DarkModeIcon className="moon" sx={{ fontSize: 60 }} />
      </div>
    </div>
  );
}

export default App;
