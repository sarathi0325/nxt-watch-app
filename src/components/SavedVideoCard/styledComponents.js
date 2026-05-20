import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoListItem = styled.li`
  width: 100%;
`

export const SavedVideoCardLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`

export const SavedVideoCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  image-rendering: auto;

  @media (min-width: 576px) {
    width: 320px; /* 📺 Fixed width for desktop row */
    height: 180px; /* 📺 Fixed height for desktop row (Standard 16:9 streaming ratio) */
    flex-shrink: 0;
  }
`

export const SavedVideoCardLogo = styled.img`
  width: 40px;
  height: 40px;
  image-rendering: auto;
`

export const SavedVideoCardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const SavedVideoCardContentHeading = styled.p`
  margin: 0px;
  font-size: 25px;
  color: ${props => (props.isDark ? '#fff' : '#000')};
`
export const SavedVideoCardContentText = styled.p`
  margin: 0px;
  font-size: 16px;
  color: ${props => (props.isDark ? '#fff' : '#000')};
`

export const SavedVideoCardViewsDateText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto';
    font-size: 14px;
    color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  }
`
