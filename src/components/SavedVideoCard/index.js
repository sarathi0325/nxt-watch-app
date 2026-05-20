import {useContext} from 'react'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoListItem,
  SavedVideoCardLink,
  SavedVideoCardImage,
  SavedVideoCardContent,
  SavedVideoCardContentText,
  SavedVideoCardContentHeading,
  SavedVideoCardViewsDateText,
} from './styledComponents'

const SavedVideoCard = props => {
  const {eachVideo} = props
  const {title, thumbnailUrl, channel, viewCount, publishedAt, id} = eachVideo
  const {name} = channel
  const {isDark} = useContext(NxtWatchContext)

  return (
    <VideoListItem>
      <SavedVideoCardLink to={`/videos/${id}`}>
        <SavedVideoCardImage alt="video thumbnail" src={thumbnailUrl} />
        <SavedVideoCardContent>
          <SavedVideoCardContentHeading isDark={isDark}>
            {title}
          </SavedVideoCardContentHeading>
          <SavedVideoCardContentText isDark={isDark}>
            {name}
          </SavedVideoCardContentText>
          <SavedVideoCardViewsDateText isDark={isDark}>
            <p>{viewCount} views</p>
            <span> • </span>
            <p>{publishedAt}</p>
          </SavedVideoCardViewsDateText>
        </SavedVideoCardContent>
      </SavedVideoCardLink>
    </VideoListItem>
  )
}

export default SavedVideoCard
