import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/app.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'TypeScript', body: 'Description'},
    {id: 3, title: 'React', body: 'Description'},
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title={'Посты про JS'} />
    </div>
  );
}

export default App;
