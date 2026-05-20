import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

const ProtectedRoutes = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (!jwtToken) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoutes
