import React from "react";
import { Articles } from "../models"

type Props = {
    article: Articles
}

const Article: React.FC<Props> = ({ article }) => {
    return (
        <div>
            <p>{article.title}</p>
        </div>
    )
}

export default Article