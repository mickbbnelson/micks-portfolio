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

    filteredDisplay(){
        if (this.state.filter === '') {
            console.log('all')
        } else if (this.state.filter === 'React') {
            console.log('React')
        } else if (this.state.filter === 'JavaScript') {
            console.log('JavaScript')
        } else if (this.state.filter === 'Ruby on Rails') {
            console.log('Ruby on Rails')
        } else if (this.state.filter === 'Ticketing Career') {
            console.log('Ticketing Career')
        }
    }
  
    render() {
        console.log(this.state)
        return (
        <div>
            <h1>Portfolio</h1>
            <>
            <PortfolioFilter updateFilter={this.updateFilter}/>
            </>
            <>
            {this.filteredDisplay()}
            </>
        </div>
    )
}}

export default Portfolio