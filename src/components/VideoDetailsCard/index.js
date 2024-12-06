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

const VideoDetailsCard = props => {
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
        const likeColor = isLiked ? '#2563eb' : '#64748b'
        const dislikeColor = isDisliked ? '#2563eb' : '#64748b'
        const saveBtnColor = videoExist ? '#2563eb' : '#64748b'

        return (
          <MainContainer isDarkTheme={isDarkTheme}>
            <ReactPlayer controls width="100%" url={videoUrl} />
            <Title>{title}</Title>
            <ActionsAndViewAndDateContainer isDarkTheme={isDarkTheme}>
              <ViewsAndDatePara>
                {viewCount} views <Dot>&</Dot> {publishedAt}
              </ViewsAndDatePara>
              <ActionsContainer>
                <ActionButton type="button" onClick={onClickLikeIcon}>
                  <BiLike color={likeColor} size={22} />
                  <ActionName color={likeColor}>Like</ActionName>
                </ActionButton>
                <ActionButton type="button" onClick={onClickDislikeIcon}>
                  <BiDislike color={dislikeColor} size={22} />
                  <ActionName color={dislikeColor}>DisLike</ActionName>
                </ActionButton>
                <ActionButton type="button" onClick={onClickToSave}>
                  <MdPlaylistAdd color={saveBtnColor} size={22} />
                  <ActionName color={saveBtnColor}>
                    {videoExist ? 'Saved' : 'Save'}
                  </ActionName>
                </ActionButton>
              </ActionsContainer>
            </ActionsAndViewAndDateContainer>
            <HorizontalLine />
            <DescriptionContainer isDarkTheme={isDarkTheme}>
              <ChannelProfile src={profileImageUrl} alt="channel logo" />
              <ChannelDetailsContainer>
                <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                <Subscribers>{subscriberCount} Subscribers</Subscribers>
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

export default VideoDetailsCard
