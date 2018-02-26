import React, {Component} from "react"

export default class Comments extends Component {
    render() {
        const {comment} = this.props
        return (
            <div>
                <p>{comment.user} write: {comment.text}</p>
            </div>
        )
    }
}
