import React from 'react'

const ContextComponent = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  savedVideosList: [],
  addToSaveVideos: () => {},
  changeActiveNavigationStyling: () => {},
  activeTab: 'home',
})
export default ContextComponent
