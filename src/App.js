import Home from "./Home";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
    <Home/>
  </ThemeProvider>
  );
}

export default App;
