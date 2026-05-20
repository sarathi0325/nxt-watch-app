import {useState, useEffect, useContext, useCallback} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import VideoCard from '../VideoCard'
import NxtWatchContext from '../../context/NxtWatchContext'
import Sidebar from '../Sidebar'
import Header from '../Header'
import {
  Main,
  HomeContainer,
  BannerAddContainer,
  BannerContent,
  VideosListContainer,
  HomeContainerBg,
  FailureText,
  FailureImage,
  FailureButton,
  FailureHeading,
  NxtLogo,
  Bannertext,
  SearchIconButton,
  SearchInput,
  SearchInputContainer,
  HomeContentContainer,
  StatusContainer,
  RemoveBannerButton,
  BannerButton,
} from './styledComponents' // Reuse your Main component

const Home = () => {
  const [showBanner, setShowBanner] = useState(true)
  const [apiStatus, setApiStatus] = useState('LOADING')
  const [videoList, setVideoList] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [finalSearchValue, setFinalSearchValue] = useState('')

  const {isDark} = useContext(NxtWatchContext)

  const onChangeInput = event => {
    setSearchInput(event.target.value)
  }

  const onTriggerSearch = () => {
    setFinalSearchValue(searchInput)
  }

  const getVideos = useCallback(async () => {
    setApiStatus('LOADING')
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${finalSearchValue}`
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
        setVideoList(formatedData)
        setApiStatus('SUCCESS')
      } else {
        setApiStatus('FAILURE')
      }
    } catch (error) {
      setApiStatus('FAILURE')
    }
  }, [finalSearchValue])

  useEffect(() => {
    getVideos()
  }, [getVideos])

  const onClickRetry = () => {
    setSearchInput('')
    setFinalSearchValue('')
    getVideos('')
  }

  const renderNoItem = () => (
    <StatusContainer>
      <FailureImage
        alt="no videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      />
      <FailureHeading isDark={isDark}>No Search results found</FailureHeading>
      <FailureText isDark={isDark}>
        Try different key words or remove search filter
      </FailureText>
      <FailureButton onClick={onClickRetry}>Retry</FailureButton>
    </StatusContainer>
  )

  const renderSuccess = () => {
    const isNoVideo = videoList.length === 0

    if (isNoVideo) {
      return renderNoItem()
    }

    return (
      <VideosListContainer>
        {videoList.map(each => (
          <VideoCard key={each.id} eachVideo={each} />
        ))}
      </VideosListContainer>
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
        alt="failure view"
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
      <FailureButton onClick={onClickRetry}>Retry</FailureButton>
    </StatusContainer>
  )

  const renderVideoContainer = () => {
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
        <HomeContainerBg isDark={isDark} data-testid="home">
          <HomeContainer>
            {showBanner && (
              <BannerAddContainer data-testid="banner">
                <BannerContent>
                  <NxtLogo
                    alt="nxt watch logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  />
                  <Bannertext>
                    Buy Nxt Watch Premium prepaid plans with UPI
                  </Bannertext>
                  <BannerButton type="button">GET IT NOW</BannerButton>
                </BannerContent>
                <RemoveBannerButton
                  data-testid="close"
                  type="button"
                  onClick={() => setShowBanner(false)}
                >
                  <AiOutlineClose size={20} />
                </RemoveBannerButton>
              </BannerAddContainer>
            )}
            <HomeContentContainer>
              <SearchInputContainer isDark={isDark}>
                <SearchInput
                  onChange={onChangeInput}
                  value={searchInput}
                  isDark={isDark}
                  placeholder="Search"
                  type="search"
                />
                <SearchIconButton
                  type="button"
                  data-testid="searchButton"
                  onClick={onTriggerSearch}
                  isDark={isDark}
                >
                  <BsSearch color={isDark ? '#ffffff' : '#181818'} size={15} />
                </SearchIconButton>
              </SearchInputContainer>
              {renderVideoContainer()}
            </HomeContentContainer>
          </HomeContainer>
        </HomeContainerBg>
      </Main>
    </>
  )
}

export default Home
