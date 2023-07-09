import {Component} from 'react'
import {
  Heading,
  MainContainer,
  MemeGeneratorContainer,
  InputFieldsContainer,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
  MemeGeneratedContainer,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
    imageUrlDisplay: '',
    topTextDisplay: '',
    bottomTextDisplay: '',
    fontSizeDisplay: '',
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, fontSize} = this.state
    this.setState({
      imageUrlDisplay: imageUrl,
      topTextDisplay: topText,
      bottomTextDisplay: bottomText,
      fontSizeDisplay: fontSize,
    })
  }

  imageUrlUpdate = event => {
    this.setState({imageUrl: event.target.value})
  }

  topTextUpdate = event => {
    this.setState({topText: event.target.value})
  }

  bottomTextUpdate = event => {
    this.setState({bottomText: event.target.value})
  }

  selectUpdate = event => {
    this.setState({fontSize: event.target.value})
  }

  renderForm = () => {
    const {fontSize, imageUrl, topText, bottomText} = this.state
    return (
      <MemeGeneratorContainer onSubmit={this.onSubmitForm}>
        <Heading bigScreen>Meme Generator</Heading>
        <InputFieldsContainer>
          <CustomLabel htmlFor="imageUrl">Image Url</CustomLabel>
          <CustomInput
            type="text"
            onChange={this.imageUrlUpdate}
            placeholder="Enter the Image URL"
            value={imageUrl}
            id="imageUrl"
          />
        </InputFieldsContainer>
        <InputFieldsContainer>
          <CustomLabel htmlFor="topText">Top Text</CustomLabel>
          <CustomInput
            type="text"
            value={topText}
            onChange={this.topTextUpdate}
            placeholder="Enter the Top Text"
            id="topText"
          />
        </InputFieldsContainer>
        <InputFieldsContainer>
          <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
          <CustomInput
            type="text"
            value={bottomText}
            onChange={this.bottomTextUpdate}
            placeholder="Enter the Bottom Text"
            id="bottomText"
          />
        </InputFieldsContainer>
        <InputFieldsContainer>
          <CustomLabel htmlFor="selectContainer">Font Size</CustomLabel>
          <CustomSelect
            onChange={this.selectUpdate}
            value={fontSize}
            id="selectContainer"
          >
            {fontSizesOptionsList.map(each => (
              <CustomOption value={each.displayText} key={each.optionId}>
                {each.displayText}
              </CustomOption>
            ))}
          </CustomSelect>
        </InputFieldsContainer>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorContainer>
    )
  }

  renderMeme = () => {
    const {
      fontSizeDisplay,
      imageUrlDisplay,
      topTextDisplay,
      bottomTextDisplay,
    } = this.state
    return (
      <MemeGeneratedContainer
        data-testid="meme"
        backgroundImage={imageUrlDisplay}
      >
        <TextContent fontSize={fontSizeDisplay}>{topTextDisplay}</TextContent>
        <TextContent fontSize={fontSizeDisplay}>
          {bottomTextDisplay}
        </TextContent>
      </MemeGeneratedContainer>
    )
  }

  render() {
    return (
      <MainContainer>
        <Heading>Meme Generator</Heading>
        {this.renderForm()}
        {this.renderMeme()}
      </MainContainer>
    )
  }
}

export default MemeGenerator
