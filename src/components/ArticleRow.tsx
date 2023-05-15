import React from "react";
import { Articles } from "../models"

type Props = {
    article: Articles
    getSpecificArticle: (article: Articles) => void
    showArticleHandler: () => void
}

const ArticleRow: React.FC<Props> = ({ article, getSpecificArticle, showArticleHandler }) => {

    const handleClick = (article: Articles) => {
        getSpecificArticle(article)
    }

    return (
        <div>

            <span>1</span>
            <span><span onClick={() => {handleClick(article); showArticleHandler()}}>{article.title}</span></span>
            <span><button className="go-btn">GO</button></span>
        </div>
    )
}

export default ArticleRow