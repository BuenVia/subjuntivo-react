import React from "react";
import { Articles } from "../models"

type Props = {
    article: Articles
    getSpecificArticle: (article: Articles) => void
}

const ArticleRow: React.FC<Props> = ({ article, getSpecificArticle }) => {

    const handleClick = (article: Articles) => {
        getSpecificArticle(article)
    }

    return (
        <tr className="table-row">
            <td>1</td>
            <td><a onClick={() => handleClick(article)}>{article.title}</a></td>
            <td><button className="go-btn">GO</button></td>
        </tr>
    )
}

export default ArticleRow