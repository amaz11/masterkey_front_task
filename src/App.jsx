import { useState } from 'react';

import './App.css';
import Partition from './components/Partition';
import Navbar from './components/Navbar/Navbar';
import Alphabet from './components/Alphabet';

function App() {
  const [task, setTask] = useState(false);

  return (
    <div className="display">
      <Navbar setTask={setTask} />
      {task ? (
        <Alphabet />
      ) : (
        <div className="partitionApp">
          <Partition initialColor="lightblue" onRemove={() => {}} />
        </div>
      )}
    </div>
  );
}

export default App;
