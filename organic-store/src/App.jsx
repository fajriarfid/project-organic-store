import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
