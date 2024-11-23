import {MdPlaylistAdd} from 'react-icons/md'
import ContextComponent from '../../context/ContextComponent'
import Header from '../Header'
import NavigationLinks from '../NavigationLinks'
import VideoCard from '../VideoCard'

import {
  SavedVideosBgContainer,
  MainContainer,
  SavedVideosHeadingContainer,
  AddToPlayListIconContainer,
  Heading,
  ListOfSavedVideos,
  NoVideosImage,
} from './styledComponent'

const SavedVideos = () => (
  <ContextComponent.Consumer>
    {value => {
      const {savedVideosList, isDarkTheme} = value

      return (
        <>
          <Header />
          <SavedVideosBgContainer isDarkTheme={isDarkTheme}>
            <NavigationLinks />
            <MainContainer>
              {savedVideosList.length > 0 ? (
                <>
                  <SavedVideosHeadingContainer isDarkTheme={isDarkTheme}>
                    <AddToPlayListIconContainer>
                      <MdPlaylistAdd color="red" size={25} />
                    </AddToPlayListIconContainer>
                    <Heading>Saved Videos</Heading>
                  </SavedVideosHeadingContainer>
                  <ListOfSavedVideos>
                    {savedVideosList.map(eachVideo => (
                      <VideoCard videoDetails={eachVideo} key={eachVideo.id} />
                    ))}
                  </ListOfSavedVideos>
                </>
              ) : (
                <NoVideosImage
                  alt="no saved videos"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                />
              )}
            </MainContainer>
          </SavedVideosBgContainer>
        </>
      )
    }}
  </ContextComponent.Consumer>
)
export default SavedVideos
