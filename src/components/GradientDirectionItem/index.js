import {CustomDirection, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, onClickDirection, isActive} = props
  const {value, displayText} = details

  const clickDirection = () => {
    onClickDirection(value)
  }
  return (
    <CustomDirection isActive={isActive}>
      <CustomButton onClick={clickDirection}>{displayText}</CustomButton>
    </CustomDirection>
  )
}
export default GradientDirectionItem
