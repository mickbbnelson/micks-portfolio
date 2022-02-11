import { Switch, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'

const Pages = () => {
    return (
        <div id='pages'>
        <Switch>
            <Route exact path="/about"><About/> </Route>
            <Route exact path="/contact"><Contact/> </Route>
            <Route exact path="/portfolio"><Portfolio/> </Route>
        </Switch>
        </div>
    )
}

export default Pages