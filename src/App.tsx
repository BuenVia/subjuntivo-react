import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios';
import { Articles } from './models'
import Article from './components/Article';

const App: React.FC = () => {

  const [articles, setArticles] = useState<Articles[]>([])

  const getArticles = async () => {
    const URL = 'http://localhost:8080/api/subjuntivo/read'
    try {
      await axios.get(URL).then(res => setArticles(res.data))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

  console.log(articles);
  

  return (
    <div className="App">
      <Header />

      {articles.map(article => {
        return <Article key={article.id} article={article} />
      })}
      
    </div>
  );
}

export default App;
