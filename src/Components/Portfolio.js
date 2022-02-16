import React from "react"
import PortfolioFilter from "./PortfolioFilter"
import ReactProjects from "./ReactProjects"
import JavaScriptProjects from "./ReactProjects"
import RubyProjects from "./RubyProjects"
import MusicCareer from "./MusicCareer"

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
            return [<ReactProjects />, <JavaScriptProjects />, <RubyProjects />, <MusicCareer />]
        } else if (this.state.filter === 'React') {
            return <ReactProjects />
        } else if (this.state.filter === 'JavaScript') {
            return <JavaScriptProjects />
        } else if (this.state.filter === 'Ruby on Rails') {
            return <RubyProjects />
        } else if (this.state.filter === 'Ticketing Career') {
            return <MusicCareer />
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