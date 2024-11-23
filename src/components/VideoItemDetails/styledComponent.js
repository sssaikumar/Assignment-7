import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#050505' : '#f7fafa')};
  color: ${props => (props.isDarkTheme ? '#f7fafa' : '#050505')};
`

export const LoadSpinnerContainer = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
