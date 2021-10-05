import Toast from './cmps/Toast'
import Header from './cmps/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { setToast } from './store/actions/toastAction';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const { currWeather } = useSelector(state => state.weatherModule)
  const dispatch = useDispatch();
  const dayTime = currWeather.isDayTime ? 'Day' : 'Night';
  const toast = useSelector(state => state.toastModule.toast);
  
  // Clear & close toast
  useEffect(() => {
    var timeoutId;
    timeoutId = setTimeout(() => {
      dispatch(setToast(null))
    }, 3000)
    return () => {
      clearTimeout(timeoutId)
     }
  }, [toast]);

  return (
    <>
      {toast && <Toast toast={toast} />}
      <Router>
        <main className={`App ${dayTime}`}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:locationKey/:locationName" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
