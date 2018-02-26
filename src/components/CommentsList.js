import React, {Component} from "react"
import Comments from './Comments'
import toggleOpen from "../decorators/toggleOpen"

class CommentsList extends Component {
    static defoultProps = {
        comments: []
    }

    render(){
        return (
            <div>
                <button onClick = {this.props.toggleOpen} >
                    {this.props.isOpen?"Hide comments":"Show comments"}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody(){
        const {comments, isOpen} = this.props
        if(!isOpen) return null
        if(!comments.length) return <p> No comments </p>
        return (
            <ul>
                {comments.map(function(comment) {return <li key = {comment.id}><Comments comment = {comment}/></li>})}
            </ul>
        )
    }
}

export default toggleOpen(CommentsList)
