import React from 'react'
import { Articles } from '../models'

interface Props {
    currentArticle: Articles
}

const Article: React.FC<Props> = ({ currentArticle }) => {
    return (
        <div>
            <p>Article</p>
        </div>
    )
}

export default Article