import styled from 'styled-components'

export const MainVideoCart = styled.div`
  width: 100%;
  font-family: roboto;
  @media screen and (max-width: 575px) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 576px) {
    width: 48%;
    height: 300px;
  }

  @media screen and (min-width: 656px) {
    width: 48%;
    height: 315px;
  }

  @media screen and (min-width: 768px) {
    width: 32%;
    height: 270px;
  }
  @media screen and (min-width: 992px) {
    height: 310px;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 84%;
  color: ${props => (props.isDarkTheme ? 'white' : '#050505')};
`
export const ChannelProfile = styled.img`
  width: 12%;
  height: 45px;
`
export const Title = styled.p`
  font-size: 14px;
  font-weight: 450;
  margin: 0px;
`
export const ChannelName = styled.p`
  margin: 0px;
  margin-top: 5px;
  margin-bottom: 3px;
  font-size: 14px;
  font-weight: 450;
  color: ${props => (props.isDarkTheme ? '#dae3e3' : 'grey')};
`
export const ViewsAndPublishedDate = styled.p`
  margin: 0px;
  font-weight: 450;
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#edf2f2' : 'grey')};
`
export const Dot = styled.span`
  height: 24px;
  width: 30px;
  font-size: 6px;
  border-radius: 50%;
  border-width: 0px;
  color: ${props => (props.isDarkTheme ? '#edf2f2' : 'grey')};
  background-color: ${props => (props.isDarkTheme ? '#edf2f2' : 'grey')};
  margin-left: 11px;
  margin-right: 11px;
`
