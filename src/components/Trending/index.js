import {useState, useEffect, useContext, useCallback} from 'react'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Header from '../Header'
import TrendingCard from '../TrendingCard'
import NxtWatchContext from '../../context/NxtWatchContext'
import Sidebar from '../Sidebar'
import {
  Main,
  TrendingContainer,
  TrendingContainerBg,
  BannerContainer,
  BannerContent,
  BannerLogoContainer,
  TrendingVideosListContainer,
  FailureText,
  FailureImage,
  FailureButton,
  FailureHeading,
  Bannertext,
  TrendingContentContainer,
  StatusContainer,
} from './styledComponents' // Reuse your Main component

const Trending = () => {
  const [apiStatus, setApiStatus] = useState('LOADING')
  const [trendingVideoList, setTrendingVideoList] = useState([])

  const {isDark} = useContext(NxtWatchContext)

  const getTrendingVideos = useCallback(async () => {
    setApiStatus('LOADING')
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
          viewCount: each.view_count,
          publishedAt: each.published_at,
        }))
        setTrendingVideoList(formatedData)
        setApiStatus('SUCCESS')
      } else {
        setApiStatus('FAILURE')
      }
    } catch (error) {
      setApiStatus('FAILURE')
    }
  }, [])

  useEffect(() => {
    getTrendingVideos()
  }, [getTrendingVideos])

  const renderNoItem = () => (
    <StatusContainer>
      <FailureImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" />
      <FailureHeading isDark={isDark}>No Search results found</FailureHeading>
      <FailureText isDark={isDark}>
        Try different key words or remove search filter
      </FailureText>
      <FailureButton onClick={() => getTrendingVideos()}>Retry</FailureButton>
    </StatusContainer>
  )

  const renderSuccess = () => {
    const isNoVideo = trendingVideoList.length === 0

    if (isNoVideo) {
      return renderNoItem()
    }

    return (
      <TrendingVideosListContainer>
        {trendingVideoList.map(each => (
          <TrendingCard key={each.id} eachVideo={each} />
        ))}
      </TrendingVideosListContainer>
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
      <FailureButton onClick={() => getTrendingVideos()}>Retry</FailureButton>
    </StatusContainer>
  )

  const renderTrendingVideoContainer = () => {
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
        <TrendingContainerBg isDark={isDark} data-testid="trending">
          <TrendingContainer>
            <BannerContainer data-testid="banner" isDark={isDark}>
              <BannerContent>
                <BannerLogoContainer isDark={isDark}>
                  <HiFire size={35} color="#ff0000" />
                </BannerLogoContainer>
                <Bannertext isDark={isDark}>Trending</Bannertext>
              </BannerContent>
            </BannerContainer>
            <TrendingContentContainer>
              {renderTrendingVideoContainer()}
            </TrendingContentContainer>
          </TrendingContainer>
        </TrendingContainerBg>
      </Main>
    </>
  )
}

export default Trending
