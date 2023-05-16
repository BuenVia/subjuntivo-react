import React from 'react'
import { Articles } from '../models'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface Props {
    currentArticle: Articles
}

const Article: React.FC<Props> = ({ currentArticle }) => {

    

    return (
        <div>
            <p>{currentArticle.title}</p>
            <ReactMarkdown children={currentArticle.markdown} />
        </div>
    )
}

export default Article