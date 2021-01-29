import './App.css';
import Header from './Header'
import Sidebar from './SideBar'
import RecommendedVideos from './RecommendedVideos'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            {/* :searchTerm matches anything in the URL */}
            <div className="app__page">
              {/* generally uses display: block => stacks everything */}
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              {/* generally uses display: block => stacks everything */}
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
