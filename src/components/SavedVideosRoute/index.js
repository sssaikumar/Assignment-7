import {MdPlaylistAdd} from 'react-icons/md'
import ContextComponent from '../../context/ContextComponent'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoCard from '../VideoCard'

import {
  SavedVideosBgContainer,
  MainContainer,
  SavedVideosHeadingContainer,
  AddToPlayListIconContainer,
  Heading,
  ListOfSavedVideos,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosPara,
} from './styledComponent'

const SavedVideosRoute = () => (
  <ContextComponent.Consumer>
    {value => {
      const {savedVideosList, isDarkTheme} = value

      return (
        <>
          <Header />
          <SavedVideosBgContainer isDarkTheme={isDarkTheme}>
            <NavigationBar />
            <MainContainer data-testid="savedVideos">
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
                <NoVideosContainer isDarkTheme={isDarkTheme}>
                  <NoVideosImage
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                  />
                  <NoVideosHeading>No saved videos found</NoVideosHeading>
                  <NoVideosPara>
                    You can save your videos while watching them
                  </NoVideosPara>
                </NoVideosContainer>
              )}
            </MainContainer>
          </SavedVideosBgContainer>
        </>
      )
    }}
  </ContextComponent.Consumer>
)
export default SavedVideosRoute
