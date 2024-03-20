import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  CustomDiv,
  CustomUl,
  CustomDivColor,
  ButtonGenerate,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    value: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    generatedBackground: `linear-gradient(to ${gradientDirectionsList[0].value} , #8ae323, #014f7b)`,
  }

  onFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onClickDirection = value => {
    this.setState({value})
  }

  generateBackgroundFunc = () => {
    const {value, firstColor, secondColor} = this.state
    const background = `linear-gradient(to ${value}, ${firstColor}, ${secondColor})`
    this.setState({generatedBackground: background})
  }

  render() {
    const {value, firstColor, secondColor, generatedBackground} = this.state

    return (
      <CustomDiv
        backgroundColor={generatedBackground}
        data-testid="gradientGenerator"
      >
        <div>
          <h1>Generate a CSS Color Gradient</h1>
          <p>Choose Direction</p>
          <CustomUl>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                details={each}
                key={each.directionId}
                onClickDirection={this.onClickDirection}
                isActive={each.value === value}
              />
            ))}
          </CustomUl>
          <p className="para">Pick the Colors</p>
          <CustomDivColor>
            <div>
              <p>{firstColor}</p>
              <input
                type="color"
                onChange={this.onFirstColor}
                value={firstColor}
              />
            </div>
            <div>
              <p>{secondColor}</p>
              <input
                type="color"
                onChange={this.onSecondColor}
                value={secondColor}
              />
            </div>
          </CustomDivColor>
          <ButtonGenerate type="button" onClick={this.generateBackgroundFunc}>
            Generate
          </ButtonGenerate>
        </div>
      </CustomDiv>
    )
  }
}

export default GradientGenerator
