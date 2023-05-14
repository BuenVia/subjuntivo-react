import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ArticleRow from './components/ArticleRow';
import axios from 'axios';
import { Articles } from './models'
import Article from './components/Article';

const App: React.FC = () => {

  const [articles, setArticles] = useState<Articles[]>([])
  const [showArticle, setShowArticle] = useState<boolean>(false)
  const [currentArticle, setCurrentArticle] = useState({})

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

  // const showArticleHandler = () => {
  //   setShowArticle(value => !value)
  // }

  const getSpecificArticle = (article: Articles) => {
    console.log(article)
    setCurrentArticle(article)
  }
  

  return (
    <div className="App">
      <Header />

      <table className='table'>
        <thead>
            <th>Chapter</th>
            <th>Title</th>
            <th>Open</th>
        </thead>
        <tbody>
          
          {showArticle ? <Article currentArticle={currentArticle} /> : articles.map(article => {
            return <ArticleRow key={article.id} article={article} getSpecificArticle={getSpecificArticle} />
          })}
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
