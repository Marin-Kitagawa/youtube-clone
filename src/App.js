import './App.css';
import Header from './Header'
import Sidebar from './SideBar'
import RecommendedVideos from './RecommendedVideos'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
      {/* generally uses display: block => stacks everything */}
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
