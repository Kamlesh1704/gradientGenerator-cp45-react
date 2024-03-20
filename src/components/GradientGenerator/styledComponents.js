import styled from 'styled-components'

export const CustomDiv = styled.div`
  background: ${props => props.backgroundColor};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`
export const CustomUl = styled.ul`
  display: flex;
  gap: 10px;
  list-style-type: none;
`
export const CustomDivColor = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  margin-left: 120px;
`
export const ButtonGenerate = styled.button`
  height: 50px;
  width: 100px;
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  text-align: center;
  margin-left: 10px;
  margin-top: 30px;
`
