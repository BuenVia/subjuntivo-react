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
  const [currentArticle, setCurrentArticle] = useState<Articles>({
    id: "",
    title: "",
    auth: "",
    markdown: "",
    sanitizedHtml: "",
    createdAt: "",
    slug: ""
  })

  const getArticles = async () => {
    const URL = 'https://nsoxnw-8080.csb.app/api/subjuntivo/read'
    try {
      await axios.get(URL).then(res => setArticles(res.data))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

  const showArticleHandler = () => {
    console.log(true)
    setShowArticle(value => !value)
  }

  const getSpecificArticle = (article: Articles) => {
    setCurrentArticle(article)
  }
  

  return (
    <div className="App">
      <Header />


          
          {showArticle ? <Article currentArticle={currentArticle} /> : articles.map(article => {
            return <ArticleRow key={article.id} article={article} getSpecificArticle={getSpecificArticle} showArticleHandler={showArticleHandler} />
          })}

      
    </div>
  );
}

export default App;
