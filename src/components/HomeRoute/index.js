import {Component} from 'react'
import {FaSearch} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import HomeVideoCard from '../HomeVideoCard'
import FetchVideosFailure from '../FetchVideosFailure'

import {
  NavigationAndHomeContainers,
  HomeContainer,
  BannerContainer,
  BannerLeftPartContainer,
  BannerLogo,
  BannerText,
  BannerGetItNowBtn,
  BannerRightPartContainer,
  BannerCloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  LoadSpinnerContainer,
  VideoListContainer,
  NoSearchResultsFoundContainer,
  NoResultsImage,
  NoResultsHeading,
  TryDiffKeyWordsText,
} from './styledComponent'
import ContextComponent from '../../context/ContextComponent'

const apiStatusConstants = {
  initial: 'IN_INITIAL',
  success: 'ON_SUCCESS',
  failure: 'ON_FAILURE',
  loading: 'ON_LOADING',
}

class HomeRoute extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
    searchInput: '',
    bannerDisplay: 'flex',
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

    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
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

  onClickBannerClose = () => {
    this.setState({bannerDisplay: 'none'})
  }

  renderFetchLoading = () => (
    <LoadSpinnerContainer data-testid="loader">
      <Loader color="grey" type="TailSpin" size={30} />
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
      case apiStatusConstants.failure:
        return <FetchVideosFailure retryFetch={this.fetchTheDetails} />
      default:
        return null
    }
  }

  render() {
    const {searchInput, bannerDisplay, videosList, apiStatus} = this.state

    return (
      <ContextComponent.Consumer>
        {value => {
          const {isDarkTheme} = value
          const searchIconColor = isDarkTheme ? '#f7fafa' : '#232424'

          return (
            <>
              <Header />
              <NavigationAndHomeContainers isDarkTheme={isDarkTheme}>
                <NavigationBar />
                <HomeContainer data-testid="home" isDarkTheme={isDarkTheme}>
                  <BannerContainer data-testid="banner" display={bannerDisplay}>
                    <BannerLeftPartContainer>
                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with <br /> UPI
                      </BannerText>
                      <BannerGetItNowBtn type="button">
                        GET IT NOW
                      </BannerGetItNowBtn>
                    </BannerLeftPartContainer>
                    <BannerRightPartContainer>
                      <BannerCloseButton
                        data-testid="close"
                        onClick={this.onClickBannerClose}
                      >
                        <IoMdClose size={25} />
                      </BannerCloseButton>
                    </BannerRightPartContainer>
                  </BannerContainer>
                  <SearchContainer isDarkTheme={isDarkTheme}>
                    <SearchInput
                      isDarkTheme={isDarkTheme}
                      placeholder="Search"
                      onChange={this.onChangeSearchInput}
                      type="search"
                      value={searchInput}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      type="button"
                      onClick={this.onClickSearchIcon}
                    >
                      <FaSearch color={searchIconColor} size={18} />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderAllApiStatusContent()}
                  {(apiStatus === apiStatusConstants.success) ===
                    (videosList.length === 0) && (
                    <NoSearchResultsFoundContainer>
                      <NoResultsImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                        alt="no videos"
                      />
                      <NoResultsHeading>
                        No Search results found
                      </NoResultsHeading>
                      <TryDiffKeyWordsText>
                        Try different key words or remove search filter
                      </TryDiffKeyWordsText>
                    </NoSearchResultsFoundContainer>
                  )}
                </HomeContainer>
              </NavigationAndHomeContainers>
            </>
          )
        }}
      </ContextComponent.Consumer>
    )
  }
}
export default HomeRoute
