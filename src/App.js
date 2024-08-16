import { useState, useCallback } from 'react';
import './App.css';
import CounterItem from './components/counter-item/counterItem';
const User = ({ firstname, lastname }) => {
  const [counter, setCounter] = useState(0);
  const [active, setActive] = useState(true)
  const onToggle = () => {
    setCounter(counter - 1);
  }

  const onIncrement = () => {
    setCounter(counter + 1);
  }

  const colors = {
    color: active ? 'green' : 'red',
  }
  const counterGenerate = useCallback(() => {
    return new Array(counter).fill('').map((_, idx) => `Counter number ${idx + 1}`)
  },
  )

  return (
    <div className='con'>
      <p style={colors}>Use activeted {counter} </p>
      <div className="btns">
        <button className='btn btn-success' onClick={onIncrement}>+</button>
        <button className='btn btn-danger' onClick={onToggle}>-</button>
      </div>
      <CounterItem counterGenerate={counterGenerate} />
    </div>
  );
}

function App() {
  return (
    <div className="userss">
      <User firstname="Akbar" lastname="Kasimjanov" />
    </div>
  );
}

export default App;
