import {Link} from 'react-router-dom'
import ContextComponent from '../../context/ContextComponent'

import {
  VideoItemCard,
  VideoThumbNailContainer,
  VideoThumbNailImage,
  AboutVideoDetailsContainer,
  ChannelProfileImage,
  TitleAndViewsChannelNameAndDateBgContainer,
  Title,
  ChannelNameViewsAndPublishedDateContainer,
  ChannelName,
  ViewsAndDatePara,
  Dot,
} from './styledComponent'

const VideoCard = props => {
  const {videoDetails} = props
  const {
    channel,
    id,
    title,
    viewCount,
    publishedAt,
    thumbnailUrl,
  } = videoDetails
  const {name, profileImageUrl} = channel

  return (
    <ContextComponent.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoItemCard>
            <VideoThumbNailContainer>
              <Link to={`/videos/${id}`}>
                <VideoThumbNailImage src={thumbnailUrl} />
              </Link>
            </VideoThumbNailContainer>
            <AboutVideoDetailsContainer>
              <ChannelProfileImage src={profileImageUrl} />
              <TitleAndViewsChannelNameAndDateBgContainer>
                <Title>{title}</Title>
                <ChannelNameViewsAndPublishedDateContainer>
                  <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                  <ViewsAndDatePara isDarkTheme={isDarkTheme}>
                    {viewCount} views <Dot isDarkTheme={isDarkTheme}>&</Dot>
                    {publishedAt}
                  </ViewsAndDatePara>
                </ChannelNameViewsAndPublishedDateContainer>
              </TitleAndViewsChannelNameAndDateBgContainer>
            </AboutVideoDetailsContainer>
          </VideoItemCard>
        )
      }}
    </ContextComponent.Consumer>
  )
}
export default VideoCard
