import {Switch, Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default App
