import ContextComponent from '../../context/ContextComponent'
import {
  FetchFailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  TryAgainButton,
} from './styledComponent'

const FetchVideosFailure = props => {
  const {retryFetch} = props

  const onClickRetry = () => {
    retryFetch()
  }

  return (
    <ContextComponent.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FetchFailureContainer isDarkTheme={isDarkTheme}>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureText>
              We are having some trouble completing your request. <br />
              Please try again.
            </FailureText>
            <TryAgainButton onClick={onClickRetry} type="button">
              Retry
            </TryAgainButton>
          </FetchFailureContainer>
        )
      }}
    </ContextComponent.Consumer>
  )
}
export default FetchVideosFailure
