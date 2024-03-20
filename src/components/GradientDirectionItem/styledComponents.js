import styled from 'styled-components'

export const CustomDirection = styled.li`
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
export const CustomButton = styled.button`
  height: 30px;
  width: 60px;
  background-color: white;
  border: none;
  border-radius: 5px;
  text-align: center;
  margin-left: 10px;
`
