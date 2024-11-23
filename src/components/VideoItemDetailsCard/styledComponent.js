import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  margin: 11px;
`
export const Title = styled.p`
  font-size: 15px;
  font-weight: 460;
`
export const ActionsAndViewAndDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${props => (props.isDarkTheme ? 'white' : 'grey')};
`

export const ViewsAndDatePara = styled.p`
  font-size: 12px;
  font-weight: 500;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 15px;
  border-width: 0px;
  background-color: transparent;
`
export const ActionName = styled.span`
  margin-left: 2px;
  color: ${props => props.color};
`
export const Dot = styled.span`
  font-size: 8px;
  height: 20px;
  width: 30px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 10px;
  color: ${props => (props.isDarkTheme ? 'white' : 'grey')};
  background-color: ${props => (props.isDarkTheme ? 'white' : 'grey')};
`
export const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid grey;
  color: ${props => (props.isDarkTheme ? 'white' : 'grey')};
`
export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => (props.isDarkTheme ? 'white' : 'grey')};
`
export const ChannelProfile = styled.img`
  width: 4%;
  height: 40px;
`
export const ChannelDetailsContainer = styled.div`
  width: 90%;
`
export const ChannelName = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#d8db91' : 'black')};
`

export const Description = styled.p`
  font-size: 12px;
  font-weight: 450;
  @media screen and (max-width: 786px) {
    display: ${props => props.displayForSmall};
  }
  @media screen and (min-width: 787px) {
    display: ${props => props.displayForLarge};
  }
`
export const Subscribers = styled.p`
  font-size: 12px;
  font-weight: 450;
`
