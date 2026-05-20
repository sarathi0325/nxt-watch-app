import {useState, useEffect, useContext, useCallback} from 'react'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Header from '../Header'
import GamingCard from '../GamingCard'
import NxtWatchContext from '../../context/NxtWatchContext'
import Sidebar from '../Sidebar'
import {
  Main,
  GamingContainer,
  GamingContainerBg,
  BannerContainer,
  BannerContent,
  BannerLogoContainer,
  GamingVideosListContainer,
  FailureText,
  FailureImage,
  FailureButton,
  FailureHeading,
  Bannertext,
  GamingContentContainer,
  StatusContainer,
} from './styledComponents' // Reuse your Main component

const Gaming = () => {
  const [apiStatus, setApiStatus] = useState('LOADING')
  const [gamingVideoList, setGamingVideoList] = useState([])

  const {isDark} = useContext(NxtWatchContext)

  const getGamingVideos = useCallback(async () => {
    setApiStatus('LOADING')
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok) {
        const formatedData = data.videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          viewCount: each.view_count,
        }))
        setGamingVideoList(formatedData)
        setApiStatus('SUCCESS')
      } else {
        setApiStatus('FAILURE')
      }
    } catch (error) {
      setApiStatus('FAILURE')
    }
  }, [])

  useEffect(() => {
    getGamingVideos()
  }, [getGamingVideos])

  const renderNoItem = () => (
    <StatusContainer>
      <FailureImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" />
      <FailureHeading isDark={isDark}>No Search results found</FailureHeading>
      <FailureText isDark={isDark}>
        Try different key words or remove search filter
      </FailureText>
      <FailureButton onClick={() => getGamingVideos()}>Retry</FailureButton>
    </StatusContainer>
  )

  const renderSuccess = () => {
    const isNoVideo = gamingVideoList.length === 0

    if (isNoVideo) {
      return renderNoItem()
    }

    return (
      <GamingVideosListContainer>
        {gamingVideoList.map(each => (
          <GamingCard key={each.id} eachVideo={each} />
        ))}
      </GamingVideosListContainer>
    )
  }

  const renderLoader = () => (
    <StatusContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDark ? '#ffffff' : '#4f46e5'}
        height="50"
        width="50"
      />
    </StatusContainer>
  )

  const renderFailure = () => (
    <StatusContainer>
      <FailureImage
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
      />
      <FailureHeading isDark={isDark}>
        Oops! Something Went Wrong
      </FailureHeading>
      <FailureText isDark={isDark}>
        We are having some trouble to complete your request. Please try again.
      </FailureText>
      <FailureButton onClick={() => getGamingVideos()}>Retry</FailureButton>
    </StatusContainer>
  )

  const renderGamingVideoContainer = () => {
    switch (apiStatus) {
      case 'LOADING':
        return renderLoader()
      case 'FAILURE':
        return renderFailure()
      case 'SUCCESS':
        return renderSuccess()
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        <GamingContainerBg isDark={isDark} data-testid="Gaming">
          <GamingContainer>
            <BannerContainer data-testid="banner" isDark={isDark}>
              <BannerContent>
                <BannerLogoContainer isDark={isDark}>
                  <HiFire size={35} color="#ff0000" />
                </BannerLogoContainer>
                <Bannertext isDark={isDark}>Gaming</Bannertext>
              </BannerContent>
            </BannerContainer>
            <GamingContentContainer>
              {renderGamingVideoContainer()}
            </GamingContentContainer>
          </GamingContainer>
        </GamingContainerBg>
      </Main>
    </>
  )
}

export default Gaming
