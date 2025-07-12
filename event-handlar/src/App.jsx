import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, seterror] = useState("")
  const [page, setPage] = useState(1)

  const getDataFromServer = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
      setPosts(response.data);
      setLoading(false);
    } catch (err) {
      seterror(err.message);
      setLoading(false);

    }
  }

  useEffect(() => {
    getDataFromServer();
  }, [page]);
  return loading ? <h1>Loading...</h1> : error ? <h1>{error}</h1>
    : (
      <div className="App">
        <h1>Posts....</h1>
        <hr />
        {posts.map((el) => (
          <Card key={el.id} id={el.id} title={el.title} body={el.body} />
        ))}
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <span>{page}</span>
        <button id="next" onClick={() => setPage(page + 1)} disabled={page==posts.length}>Next</button>
      </div>
    )

}

export default App;