import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import './styles/app.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Python', body: 'Description'},
    {id: 3, title: 'C++', body: 'Description'},
  ]);

  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      <h1 style={{textAlign: 'center'}}>Список постов</h1>
      {posts.map(post =>
        <PostItem post={post} key={post.id} />
      )}
    </div>
  );
}

export default App;
