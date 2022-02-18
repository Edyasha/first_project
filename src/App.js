import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import './styles/app.css';

function App() {
  const [value, setValue] = useState('Текст в инпуте')

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>
            JavaScript - язык программирования
          </div>
        </div>
        <div className="post__btns">
          <button>удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
