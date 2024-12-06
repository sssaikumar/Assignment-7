import {
  NotFoundContainer,
  NotFoundImage,
  Heading,
  para,
} from './styledComponent'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      alt="not found"
    />
    <Heading>Page Not Found</Heading>
    <para>we are sorry, the page you requested could not be found.</para>
  </NotFoundContainer>
)
export default NotFound
