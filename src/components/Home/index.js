import {Component} from 'react'
import {FaSearch} from 'react-icons/fa'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavigationLinks from '../NavigationLinks'
import HomeVideoCard from '../HomeVideoCard'
import {
  HomeBgContainer,
  MainContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoadSpinnerContainer,
  VideoListContainer,
} from './styledComponent'
import ContextComponent from '../../context/ContextComponent'

const apiStatusConstants = {
  initial: 'IN_INITIAL',
  success: 'ON_SUCCESS',
  failure: 'ON_FAILURE',
  loading: 'ON_LOADING',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchInput: '',
  }

  componentDidMount() {
    this.fetchTheDetails()
  }

  onFetchVideosSuccess = videos => {
    const formatToCamelCase = videos.map(eachVideo => ({
      id: eachVideo.id,
      title: eachVideo.title,
      thumbnailUrl: eachVideo.thumbnail_url,
      channel: {
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      },
      viewCount: eachVideo.view_count,
      publishedAt: eachVideo.published_at,
    }))
    this.setState({
      apiStatus: apiStatusConstants.success,
      videosList: formatToCamelCase,
    })
  }

  fetchTheDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})

    const jwtToken = Cookies.get('a7_token')
    const {searchInput} = this.state

    const Url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(Url, options)
    const data = await response.json()
    if (response.ok) {
      this.onFetchVideosSuccess(data.videos)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchIcon = () => {
    this.fetchTheDetails()
  }

  renderFetchLoading = () => (
    <LoadSpinnerContainer>
      <Loader type="TailSpin" size={40} />
    </LoadSpinnerContainer>
  )

  renderFetchSuccess = () => {
    const {videosList} = this.state
    return (
      <VideoListContainer>
        {videosList.map(eachVideo => (
          <HomeVideoCard key={eachVideo.id} eachVideo={eachVideo} />
        ))}
      </VideoListContainer>
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
    const {searchInput} = this.state

    return (
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme} = value
          const searchIconColor = isDarkTheme ? '#f7fafa' : '#232424'

          return (
            <>
              <Header />
              <HomeBgContainer isDarkTheme={isDarkTheme}>
                <NavigationLinks />
                <MainContainer isDarkTheme={isDarkTheme}>
                  <SearchContainer isDarkTheme={isDarkTheme}>
                    <SearchInput
                      isDarkTheme={isDarkTheme}
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                      type="search"
                      value={searchInput}
                    />
                    <SearchButton onClick={this.onClickSearchIcon}>
                      <FaSearch color={searchIconColor} size={18} />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderAllApiStatusContent()}
                </MainContainer>
              </HomeBgContainer>
            </>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}
export default Home
