import React from 'react'
import { Articles } from '../models'

interface Props {
    currentArticle: Articles
}

const Article: React.FC<Props> = ({ currentArticle }) => {

    

    return (
        <div>
            <p>{currentArticle.title}</p>
            {currentArticle.sanitizedHtml}
        </div>
    )
}

export default Article