import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ContextComponent from '../../context/ContextComponent'
import Header from '../Header'
import NavigationLinks from '../NavigationLinks'
import GamingVideoCard from '../GamingVideoCard'

import {
  GamingBgContainer,
  MainContainer,
  LoadSpinnerContainer,
  GamingHeadingContainer,
  GamingIconContainer,
  Heading,
  ListOfGamingVideos,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'IN_INITIAL',
  success: 'ON_SUCCESS',
  failure: 'ON_FAILURE',
  loading: 'ON_LOADING',
}

class GamingRoute extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchVideoDetails()
  }

  onFetchSuccess = videos => {
    const formatToCamelCaseList = videos.map(video => ({
      id: video.id,
      title: video.title,
      thumbnailUrl: video.thumbnail_url,
      viewCount: video.view_count,
    }))
    this.setState({
      apiStatus: apiStatusConstants.success,
      gamingVideos: formatToCamelCaseList,
    })
  }

  fetchVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('a7_token')

    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onFetchSuccess(data.videos)
    } else {
      this.onFetchFailure()
    }
  }

  renderFetchLoading = () => (
    <LoadSpinnerContainer>
      <Loader color="grey" type="TailSpin" size={40} />
    </LoadSpinnerContainer>
  )

  renderFetchSuccess = () => {
    const {gamingVideos} = this.state
    return (
      <ListOfGamingVideos>
        {gamingVideos.map(eachVideo => (
          <GamingVideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </ListOfGamingVideos>
    )
  }

  renderAllApiStatusContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderFetchLoading()
      case apiStatusConstants.success:
        return this.renderFetchSuccess()
      default:
        return null
    }
  }

  render() {
    const {apiStatus} = this.state
    return (
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <GamingBgContainer isDarkTheme={isDarkTheme}>
                <NavigationLinks />
                <MainContainer isDarkTheme={isDarkTheme}>
                  {apiStatus === 'ON_SUCCESS' && (
                    <GamingHeadingContainer isDarkTheme={isDarkTheme}>
                      <GamingIconContainer>
                        <SiYoutubegaming color="red" size={25} />
                      </GamingIconContainer>
                      <Heading>Trending</Heading>
                    </GamingHeadingContainer>
                  )}
                  {this.renderAllApiStatusContent()}
                </MainContainer>
              </GamingBgContainer>
            </>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}
export default GamingRoute
