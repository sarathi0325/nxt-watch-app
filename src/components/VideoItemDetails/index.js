import {useCallback, useContext, useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {HiOutlineSaveAs} from 'react-icons/hi'
import ReactPlayer from 'react-player'
import {
  StatusContainer,
  Main,
  VideoItemContainerBg,
  ResponsiveVideoPlayer,
  HorizantalLine,
  VideoStatsContainer,
  StatsDot,
  ChannelLogo,
  ChannelAboutContainer,
  SubscribersContainer,
  SubscribersCount,
  ChannelName,
  DescriptionText,
  VideoStatsText,
  ActionContainer,
  ActionButton,
  FailureImage,
  FailureHeading,
  FailureText,
  FailureButton,
  VideoTitle,
} from './styledComponents'
import Sidebar from '../Sidebar'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'

const VideoItemDetails = props => {
  const {match} = props
  const {params} = match
  const {id} = params
  const [videoData, setVideoData] = useState({})
  const [apiStatus, setApiStatus] = useState('')
  const [isLiked, setIsLiked] = useState(false)
  const [isDisLiked, setIsDisLiked] = useState(false)
  const {isDark, savedVideosList, toggleSaveVideo} = useContext(NxtWatchContext)

  const onClickLike = () => {
    setIsLiked(prev => !prev)
    setIsDisLiked(false)
  }

  const onClickDisLike = () => {
    setIsDisLiked(prev => !prev)
    setIsLiked(false)
  }

  const getVidoeDetails = useCallback(async () => {
    setApiStatus('LOADING')
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const url = `https://apis.ccbp.in/videos/${id}`
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const videoDetails = data.video_details
      const formatedData = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }
      setVideoData(formatedData)
      setApiStatus('SUCCESS')
    } else {
      setApiStatus('FAILURE')
    }
  }, [id])

  useEffect(() => {
    getVidoeDetails()
  }, [getVidoeDetails])

  const renderFailure = () => (
    <StatusContainer isDark={isDark}>
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
      <FailureButton onClick={() => getVidoeDetails()}>Retry</FailureButton>
    </StatusContainer>
  )

  const renderLoader = () => (
    <StatusContainer isDark={isDark} data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDark ? '#ffffff' : '#4f46e5'}
        height="50"
        width="50"
      />
    </StatusContainer>
  )

  const renderSuccess = () => {
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoData
    const isSaved = savedVideosList.some(each => each.id === videoData.id)
    const {profileImageUrl, subscriberCount, name} = channel || {}
    return (
      <VideoItemContainerBg isDark={isDark}>
        <ResponsiveVideoPlayer>
          <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
        </ResponsiveVideoPlayer>
        <VideoTitle isDark={isDark}>{title}</VideoTitle>
        <VideoStatsContainer>
          <VideoStatsText isDark={isDark}>
            <p>{viewCount} views</p>
            <StatsDot>•</StatsDot>
            <p>{publishedAt}</p>
          </VideoStatsText>
          <ActionContainer>
            <ActionButton
              type="button"
              isActive={isLiked}
              onClick={onClickLike}
            >
              <BiLike size={20} />
              Like
            </ActionButton>
            <ActionButton
              type="button"
              isActive={isDisLiked}
              onClick={onClickDisLike}
            >
              <BiDislike size={20} />
              Dislike
            </ActionButton>
            <ActionButton
              type="button"
              isActive={isSaved}
              onClick={() => toggleSaveVideo(videoData)}
            >
              <HiOutlineSaveAs size={20} />
              {isSaved ? 'Saved' : 'Save'}
            </ActionButton>
          </ActionContainer>
        </VideoStatsContainer>
        <HorizantalLine isDark={isDark} />
        <ChannelAboutContainer>
          <ChannelLogo alt="channel logo" src={profileImageUrl} />
          <SubscribersContainer>
            <ChannelName isDark={isDark}>{name}</ChannelName>
            <SubscribersCount isDark={isDark}>
              {subscriberCount} subscribers
            </SubscribersCount>
          </SubscribersContainer>
        </ChannelAboutContainer>
        <DescriptionText isDark={isDark}>{description}</DescriptionText>
      </VideoItemContainerBg>
    )
  }

  const renderVideoItemContainer = () => {
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
        {renderVideoItemContainer()}
      </Main>
    </>
  )
}

export default VideoItemDetails
