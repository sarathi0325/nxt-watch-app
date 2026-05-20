import styled from 'styled-components'

export const Main = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  width: 100%;
`

export const NotFoundContainerBg = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0px 20px;
`
export const NotFoundImage = styled.img`
  width: 60%;
`
export const NotFoundHeading = styled.h1`
  font-size: 21px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const NotFoundText = styled.p`
  font-size: 14px;
  color: ${props => (props.isDark ? '#cbd5e1' : '#616e7c')};
`
