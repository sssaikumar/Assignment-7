import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ContextComponent from './context/ContextComponent'
import ProtectedComponent from './components/ProtectedComponent'
import HomeRoute from './components/HomeRoute'
import Login from './components/Login'
import SavedVideosRoute from './components/SavedVideosRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'

import NotFound from './components/NotFound'

import './App.css'
import VideoDetailsRoute from './components/VideoDetailsRoute'

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
          <ProtectedComponent exact path="/" component={HomeRoute} />
          <ProtectedComponent
            exact
            path="/videos/:id"
            component={VideoDetailsRoute}
          />
          <ProtectedComponent
            exact
            path="/trending"
            component={TrendingRoute}
          />
          <ProtectedComponent exact path="/gaming" component={GamingRoute} />
          <ProtectedComponent
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ContextComponent.Provider>
    )
  }
}
export default App
