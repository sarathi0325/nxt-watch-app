import {useContext} from 'react'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SavedVideoCard from '../SavedVideoCard'
import NxtWatchContext from '../../context/NxtWatchContext'
import Sidebar from '../Sidebar'
import {
  Main,
  SavedVideosContainer,
  SavedVideosContainerBg,
  BannerContainer,
  BannerContent,
  BannerLogoContainer,
  SavedVideosListContainer,
  FailureText,
  FailureImage,
  FailureHeading,
  Bannertext,
  SavedVideosContentContainer,
  StatusContainer,
} from './styledComponents' // Reuse your Main component

const SavedVideos = () => {
  const {isDark, savedVideosList} = useContext(NxtWatchContext)

  const renderNoVideosView = () => (
    <StatusContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <FailureHeading isDark={isDark}>No saved videos found</FailureHeading>
      <FailureText isDark={isDark}>
        You can save your videos while watching them
      </FailureText>
    </StatusContainer>
  )

  const renderSuccess = () => (
    <SavedVideosListContainer>
      {savedVideosList.map(each => (
        <SavedVideoCard key={each.id} eachVideo={each} />
      ))}
    </SavedVideosListContainer>
  )

  const isNoVideo = savedVideosList.length === 0

  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        <SavedVideosContainerBg isDark={isDark} data-testid="savedVideos">
          <SavedVideosContainer>
            {!isNoVideo && (
              <BannerContainer data-testid="banner" isDark={isDark}>
                <BannerContent>
                  <BannerLogoContainer isDark={isDark}>
                    <HiFire size={35} color="#ff0000" />
                  </BannerLogoContainer>
                  <Bannertext isDark={isDark}>Saved Videos</Bannertext>
                </BannerContent>
              </BannerContainer>
            )}
            <SavedVideosContentContainer>
              {isNoVideo ? renderNoVideosView() : renderSuccess()}
            </SavedVideosContentContainer>
          </SavedVideosContainer>
        </SavedVideosContainerBg>
      </Main>
    </>
  )
}

export default SavedVideos
