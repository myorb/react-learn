import React, {Component} from "react"
import PropTypes from "prop-types"
import CommentsList from "./CommentsList"
import toggleOpen from "../decorators/toggleOpen"

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    }

    render(){
        const {article,isOpen,toggleOpen} = this.props
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen} >
                    {isOpen?"Close":"Open"}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody(){
        const {article, isOpen} = this.props
        if(!isOpen) return null
        return <section>{article.text}<br /> <CommentsList comments = {article.comments} /></section>

    }
}

export default toggleOpen(Article)