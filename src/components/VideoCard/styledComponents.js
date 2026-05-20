import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoListItem = styled.li`
  width: 100%;
  height: 100%;
`

export const VideoCardLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const VideoCardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  image-rendering: auto;

  @media (min-width: 768px) {
    height: auto;
  }
`

export const VideoCardContentContainer = styled.div`
  padding: 10px 2px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
`

export const VideoCardLogo = styled.img`
  width: 40px;
  height: 40px;
  image-rendering: auto;
`

export const VideoCardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const VideoCardContentHeading = styled.p`
  margin: 0px;
  font-size: 15px;
  color: ${props => (props.isDark ? '#fff' : '#000')};
`
export const VideoCardContentText = styled.p`
  margin: 0px;
  font-size: 12px;
  color: ${props => (props.isDark ? '#fff' : '#000')};
`

export const VideoCardViewsDateText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 0px;
  padding: 0px;

  p {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto';
    font-size: 12px;
    color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  }
`
