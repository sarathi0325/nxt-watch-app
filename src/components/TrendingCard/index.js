import {useContext} from 'react'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoListItem,
  VideoCardLink,
  VideoCardImage,
  VideoCardContentContainer,
  VideoCardLogo,
  VideoCardContent,
  VideoCardContentText,
  VideoCardContentHeading,
  VideoCardViewsDateText,
} from './styledComponents'

const TrendingCard = props => {
  const {eachVideo} = props
  const {title, thumbnailUrl, channel, viewCount, publishedAt, id} = eachVideo
  const {profileImageUrl, name} = channel
  const {isDark} = useContext(NxtWatchContext)

  return (
    <VideoListItem>
      <VideoCardLink to={`/videos/${id}`}>
        <VideoCardImage alt="video thumbnail" src={thumbnailUrl} />
        <VideoCardContentContainer>
          <VideoCardLogo alt="channel logo" src={profileImageUrl} />
          <VideoCardContent>
            <VideoCardContentHeading isDark={isDark}>
              {title}
            </VideoCardContentHeading>
            <VideoCardContentText isDark={isDark}>{name}</VideoCardContentText>
            <VideoCardViewsDateText isDark={isDark}>
              <p>{viewCount} views</p>
              <p>•</p>
              <p>{publishedAt}</p>
            </VideoCardViewsDateText>
          </VideoCardContent>
        </VideoCardContentContainer>
      </VideoCardLink>
    </VideoListItem>
  )
}

export default TrendingCard
