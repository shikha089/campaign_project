import React, { Component } from "react"

//To represent Portal component
class Portal extends Component {
    constructor(props) {
        super(props)
        this.state = { showModal: true }

        this.handleShow = this.handleShow.bind(this)
        this.handleHide = this.handleHide.bind(this)
    }

    handleShow() {
        this.setState({ showModal: true })
    }

    handleHide() {
        this.setState({ showModal: false })
    }

    render() {

        return (
            <div>
                <span className="heading">Hot This Week</span>
                <span className="info">We match marketers to their future customers. [Click to learn more]
                How to Keep a Campaign Relevant
                We'll send you actionable content every week. Just click here to find out how.
           </span>
                <span class="close" onClick={this.handleShow}>Close</span>
            </div>
        )
    }
}

export default Portal
