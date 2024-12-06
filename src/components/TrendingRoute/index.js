import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ContextComponent from '../../context/ContextComponent'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import VideoCard from '../VideoCard'
import FetchVideosFailure from '../FetchVideosFailure'

import {
  TrendingVideosBgContainer,
  MainContainer,
  LoadSpinnerContainer,
  TrendingVideosHeadingContainer,
  FireIconContainer,
  Heading,
  ListOfTrendingVideos,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'IN_INITIAL',
  success: 'ON_SUCCESS',
  failure: 'ON_FAILURE',
  loading: 'ON_LOADING',
}

class TrendingRoute extends Component {
  state = {
    trendingVideos: [],
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
      channel: {
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
      },
      viewCount: video.view_count,
      publishedAt: video.published_at,
    }))
    this.setState({
      apiStatus: apiStatusConstants.success,
      trendingVideos: formatToCamelCaseList,
    })
  }

  fetchVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/trending'
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
    <LoadSpinnerContainer data-testid="loader">
      <Loader color="grey" type="TailSpin" size={30} />
    </LoadSpinnerContainer>
  )

  renderFetchSuccess = () => {
    const {trendingVideos} = this.state
    return (
      <ListOfTrendingVideos>
        {trendingVideos.map(eachVideo => (
          <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </ListOfTrendingVideos>
    )
  }

  renderAllApiStatusContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.loading:
        return this.renderFetchLoading()
      case apiStatusConstants.success:
        return this.renderFetchSuccess()
      case apiStatusConstants.failure:
        return <FetchVideosFailure retry={this.fetchVideoDetails} />
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
              <TrendingVideosBgContainer isDarkTheme={isDarkTheme}>
                <NavigationBar />
                <MainContainer data-testid="trending" isDarkTheme={isDarkTheme}>
                  {apiStatus === 'ON_SUCCESS' && (
                    <TrendingVideosHeadingContainer isDarkTheme={isDarkTheme}>
                      <FireIconContainer>
                        <HiFire color="red" size={25} />
                      </FireIconContainer>
                      <Heading>Trending</Heading>
                    </TrendingVideosHeadingContainer>
                  )}
                  {this.renderAllApiStatusContent()}
                </MainContainer>
              </TrendingVideosBgContainer>
            </>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}
export default TrendingRoute
