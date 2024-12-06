import {Link} from 'react-router-dom'
import ContextComponent from '../../context/ContextComponent'
import {
  MainVideoCart,
  ThumbnailImage,
  VideoDescriptionContainer,
  VideoDetailsContainer,
  ChannelProfile,
  Title,
  ChannelName,
  ViewsAndPublishedDate,
  Dot,
} from './styledComponent'

const HomeVideoCard = props => (
  <ContextComponent.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {eachVideo} = props
      const {
        channel,
        id,
        thumbnailUrl,
        title,
        viewCount,
        publishedAt,
      } = eachVideo
      const {name, profileImageUrl} = channel

      return (
        <MainVideoCart isDarkTheme={isDarkTheme}>
          <Link to={`/videos/${id}`}>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
          </Link>
          <VideoDescriptionContainer>
            <ChannelProfile src={profileImageUrl} alt="channel logo" />
            <VideoDetailsContainer isDarkTheme={isDarkTheme}>
              <Title>{title}</Title>
              <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
              <ViewsAndPublishedDate isDarkTheme={isDarkTheme}>
                {viewCount} views
                <Dot isDarkTheme={isDarkTheme}>&</Dot>
                {publishedAt}
              </ViewsAndPublishedDate>
            </VideoDetailsContainer>
          </VideoDescriptionContainer>
        </MainVideoCart>
      )
    }}
  </ContextComponent.Consumer>
)
export default HomeVideoCard
