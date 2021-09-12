import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';

import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Footer from './components/footer/Footer';

function App() {
    return(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} /> 
      <Route component={NotFound} />
    </Switch> 
    <Footer/>
  </BrowserRouter>
  )
}

export default App;
