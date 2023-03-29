import "./styles.css";
import { TickTacToe } from "./components/TicTacToe/TicTacToe";
import { Folder } from "./components/Folder/Folder";
function App() {
  return (
    <div className="App">
      {/* <TickTacToe></TickTacToe> */}
      <Folder></Folder>
    </div>
  );
}

export default App;
