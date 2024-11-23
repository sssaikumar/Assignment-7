import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'

import ContextComponent from '../../context/ContextComponent'

import {
  MainContainer,
  Title,
  ActionsAndViewAndDateContainer,
  ViewsAndDatePara,
  ActionsContainer,
  ActionButton,
  ActionName,
  Dot,
  HorizontalLine,
  DescriptionContainer,
  ChannelDetailsContainer,
  ChannelName,
  ChannelProfile,
  Description,
  Subscribers,
} from './styledComponent'

const VideoItemDetailsCard = props => {
  const {onClickLike, onClickDislike} = props

  const onClickLikeIcon = () => {
    onClickLike()
  }

  const onClickDislikeIcon = () => {
    onClickDislike()
  }

  return (
    <ContextComponent.Consumer>
      {value => {
        const {isDarkTheme, addToSaveVideos, savedVideosList} = value
        const {videoDetails} = props

        const {
          channel,
          id,
          title,
          videoUrl,
          viewCount,
          publishedAt,
          description,
        } = videoDetails
        const {name, profileImageUrl, subscriberCount} = channel

        const onClickToSave = () => {
          addToSaveVideos(videoDetails)
        }

        let videoExist = false
        savedVideosList.forEach(eachVideo => {
          if (eachVideo.id === id) {
            videoExist = true
          }
        })

        const {isLiked, isDisliked} = props
        const likeColor = isLiked ? 'blue' : 'grey'
        const dislikeColor = isDisliked ? 'blue' : 'grey'
        const saveBtnColor = videoExist ? 'blue' : 'grey'

        return (
          <MainContainer isDarkTheme={isDarkTheme}>
            <ReactPlayer controls width="100%" url={videoUrl} />
            <Title>{title}</Title>
            <ActionsAndViewAndDateContainer isDarkTheme={isDarkTheme}>
              <ViewsAndDatePara>
                {viewCount} views <Dot>&</Dot> {publishedAt}
              </ViewsAndDatePara>
              <ActionsContainer>
                <ActionButton onClick={onClickLikeIcon}>
                  <BiLike color={likeColor} size={22} />
                  <ActionName color={likeColor}>Like</ActionName>
                </ActionButton>
                <ActionButton onClick={onClickDislikeIcon}>
                  <BiDislike color={dislikeColor} size={22} />
                  <ActionName color={dislikeColor}>DisLike</ActionName>
                </ActionButton>
                <ActionButton onClick={onClickToSave}>
                  <MdPlaylistAdd color={saveBtnColor} size={22} />
                  <ActionName color={saveBtnColor}>Save</ActionName>
                </ActionButton>
              </ActionsContainer>
            </ActionsAndViewAndDateContainer>
            <HorizontalLine />
            <DescriptionContainer isDarkTheme={isDarkTheme}>
              <ChannelProfile src={profileImageUrl} />
              <ChannelDetailsContainer>
                <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                <Subscribers>{subscriberCount} subscribers</Subscribers>
                <Description displayForSmall="none">{description}</Description>
              </ChannelDetailsContainer>
            </DescriptionContainer>
            <Description displayForLarge="none">{description}</Description>
          </MainContainer>
        )
      }}
    </ContextComponent.Consumer>
  )
}

export default VideoItemDetailsCard
