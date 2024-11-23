import React from 'react'

const ContextComponent = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  savedVideosList: [],
  addToSaveVideos: () => {},
  changeActiveNavigationStyling: () => {},
  activeTab: 'initial',
})
export default ContextComponent
