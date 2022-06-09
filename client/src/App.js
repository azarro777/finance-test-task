import { useSelector } from "react-redux";
import { Card } from './components/card/Card';
import { Navbar } from './components/navbar/Navbar';
import { ControlPanel } from './components/control-panel/ControlPanel';
import { COLOR_DOWN, COLOR_UP } from './config';
import './App.css';

function App() {
  const filteredQuotes = useSelector(state => state.filteredQuotes.filteredQuotes);
  const previousFilteredQuotes = useSelector(state => state.filteredQuotes.previousFilteredQuotes);

  return (
    <div className="app">
      <Navbar/>
      <ControlPanel/>
      {filteredQuotes.map((el, index) => {
        const prevQuotes = previousFilteredQuotes[index] === undefined ? 1 : previousFilteredQuotes[index].price;
        const setColor = +prevQuotes < el.price ? COLOR_UP : COLOR_DOWN;
        return (
          <Card
            key={el.id}
            id={el.id}
            color={setColor}
            ticker={el.ticker}
            price={el.price}
            persent={el.change_percent}
            change={el.change}
          />
        );
      })}
    </div>
  );
}

export default App;
