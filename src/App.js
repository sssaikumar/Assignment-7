import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import ContextComponent from './context/ContextComponent'
import ProtectedComponent from './components/ProtectedComponent'
import Home from './components/Home'
import Login from './components/Login'
import SavedVideos from './components/SavedVideos'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'

import NotFound from './components/NotFound'

import './App.css'
import VideoItemDetails from './components/VideoItemDetails'

class App extends Component {
  state = {isDarkTheme: false, savedVideosList: [], activeTab: 'initial'}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeActiveNavigationStyling = activeTab => {
    this.setState({activeTab})
  }

  addToSaveVideos = video => {
    const {savedVideosList} = this.state
    const videoNotExist = savedVideosList.every(
      eachVideo => eachVideo.id !== video.id,
    )

    if (videoNotExist) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, video],
      }))
    } else {
      const filteredList = savedVideosList.filter(
        eachVideo => eachVideo.id !== video.id,
      )
      this.setState({savedVideosList: filteredList})
    }
  }

  render() {
    const {isDarkTheme, savedVideosList, activeTab} = this.state
    return (
      <ContextComponent.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
          savedVideosList,
          addToSaveVideos: this.addToSaveVideos,
          changeActiveNavigationStyling: this.changeActiveNavigationStyling,
          activeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedComponent exact path="/" component={Home} />
          <ProtectedComponent
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedComponent
            exact
            path="/trending"
            component={TrendingRoute}
          />
          <ProtectedComponent exact path="/gaming" component={GamingRoute} />
          <ProtectedComponent
            exact
            path="/savedVideos"
            component={SavedVideos}
          />
          <NotFound />
        </Switch>
      </ContextComponent.Provider>
    )
  }
}
export default App
