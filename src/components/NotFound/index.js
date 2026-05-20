import {useContext} from 'react'
import NxtWatchContext from '../../context/NxtWatchContext'
import Sidebar from '../Sidebar'
import Header from '../Header'
import {
  Main,
  NotFoundContainerBg,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents' // Reuse your Main component

const NotFound = () => {
  const {isDark} = useContext(NxtWatchContext)

  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        <NotFoundContainerBg isDark={isDark}>
          <NotFoundContainer>
            <NotFoundImage
              alt="not found"
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
            />
            <NotFoundHeading isDark={isDark}>Page Not Found</NotFoundHeading>
            <NotFoundText isDark={isDark}>
              We are sorry, the page you requested could not be found.
            </NotFoundText>
          </NotFoundContainer>
        </NotFoundContainerBg>
      </Main>
    </>
  )
}

export default NotFound
