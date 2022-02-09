import { Switch, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'

const Pages = () => {
    return (
        <div>
        <Switch>
            <Route exact path="/about"><About/> </Route>
            <Route exact path="/contact"><Contact/> </Route>
            <Route exact path="/projects"><Projects/> </Route>
        </Switch>
        </div>
    )
}

export default Pages