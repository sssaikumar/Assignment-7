import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedComponent = props => {
  const jwtToken = Cookies.get('a7_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}
export default ProtectedComponent
