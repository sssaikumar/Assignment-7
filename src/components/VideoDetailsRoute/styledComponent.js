import styled from 'styled-components'

export const VideoDetailsAndNavigationBarContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: ${props => (props.isDarkTheme ? '#050505' : '#f7fafa')};
  color: ${props => (props.isDarkTheme ? '#f7fafa' : '#050505')};
`

export const LoadSpinnerContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
