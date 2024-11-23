import {Link} from 'react-router-dom'
import ContextComponent from '../../context/ContextComponent'

import {
  VideoItemCard,
  VideoThumbNailContainer,
  VideoThumbNailImage,
  Title,
  Views,
} from './styledComponent'

const GamingVideoCard = props => {
  const {videoDetails} = props
  const {id, title, viewCount, thumbnailUrl} = videoDetails
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
            <Title isDarkTheme={isDarkTheme}>{title}</Title>
            <Views isDarkTheme={isDarkTheme}>
              {viewCount} Watching Worldwide
            </Views>
          </VideoItemCard>
        )
      }}
    </ContextComponent.Consumer>
  )
}
export default GamingVideoCard
