import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ContextComponent from '../../context/ContextComponent'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import {
  VideoDetailsAndNavigationBarContainer,
  LoadSpinnerContainer,
} from './styledComponent'
import VideoDetailsCard from '../VideoDetailsCard'
import FetchVideosFailure from '../FetchVideosFailure'

const apiStatusConstants = {
  initial: 'IN_INITIAL',
  success: 'ON_SUCCESS',
  failure: 'ON_FAILURE',
  loading: 'ON_LOADING',
}

class VideoDetailsRoute extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.fetchVideoDetails()
  }

  onFetchSuccess = video => {
    const formatToCamelCase = {
      id: video.id,
      title: video.title,
      thumbnailUrl: video.thumbnail_url,
      videoUrl: video.video_url,
      channel: {
        name: video.channel.name,
        profileImageUrl: video.channel.profile_image_url,
        subscriberCount: video.channel.subscriber_count,
      },
      viewCount: video.view_count,
      publishedAt: video.published_at,
      description: video.description,
    }
    this.setState({
      apiStatus: apiStatusConstants.success,
      videoDetails: formatToCamelCase,
    })
  }

  fetchVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onFetchSuccess(data.video_details)
    } else {
      this.onFetchFailure()
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderFetchLoading = () => (
    <LoadSpinnerContainer data-testid="loader">
      <Loader color="grey" type="TailSpin" size={30} />
    </LoadSpinnerContainer>
  )

  renderFetchSuccess = () => {
    const {isLiked, isDisliked, videoDetails} = this.state
    return (
      <VideoDetailsCard
        onClickLike={this.onClickLike}
        onClickDislike={this.onClickDislike}
        isLiked={isLiked}
        isDisliked={isDisliked}
        videoDetails={videoDetails}
      />
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
        return <FetchVideosFailure retryFetch={this.fetchVideoDetails} />
      default:
        return null
    }
  }

  render() {
    return (
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <VideoDetailsAndNavigationBarContainer
                data-testid="videoDetailsRoute"
                isDarkTheme={isDarkTheme}
              >
                <NavigationBar />
                {this.renderAllApiStatusContent()}
              </VideoDetailsAndNavigationBarContainer>
            </>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}
export default VideoDetailsRoute
