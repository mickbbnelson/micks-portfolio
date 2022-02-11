import React from "react"
import PortfolioFilter from "./PortfolioFilter"

class Portfolio extends React.Component {

    state = {
        filter: ''
    }

    updateFilter = (language) => {
        this.setState({
            filter: language
        })
    }
  
    render() {
        console.log(this.state)
        return (
        <div>
            <h1>Portfolio</h1>
            <>
            <PortfolioFilter updateFilter={this.updateFilter}/>
            </>
        </div>
    )
}}

export default Portfolio