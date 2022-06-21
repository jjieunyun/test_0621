import './App.css';
import AddMemoForm from './components/AddMemoForm';
import MemoList from './components/MemoList';

function App() {
  return (
    <div className="App">
      <AddMemoForm/>
      <MemoList/>
    </div>
  );
}

export default App;
