import React, {Component as ReactComponent} from "react"

export default (OrigenalComponent) => class WraperComponent extends ReactComponent {
    state = {
        isOpen: true
    }

    render () {
        return <OrigenalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen} />
    }

    toggleOpen= () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}