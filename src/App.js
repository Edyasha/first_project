import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/app.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'TypeScript', body: 'Description'},
    {id: 3, title: 'React', body: 'Description'},
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState();

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <form>
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" 
          placeholder="Название поста"
        />
        <MyInput 
          value={body}
          onChange={e => setBody(e.terget.value)} 
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title={'Посты про JS'} />
    </div>
  );
}

export default App;
