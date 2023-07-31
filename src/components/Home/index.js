import {Component} from 'react'
import {
  BgColor,
  TextCard,
  TextHeading,
  InputAndButtonContainer,
  Input,
  EditText,
  SaveButton,
} from './styledComponents'

class Home extends Component {
  state = {
    searchInput: '',
    isSaveClick: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isSaveClick: !prevState.isSaveClick}))
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {isSaveClick, searchInput} = this.state
    return (
      <BgColor>
        <TextCard>
          <TextHeading>Editable Text Input</TextHeading>
          <InputAndButtonContainer>
            {isSaveClick ? (
              <Input
                type="text"
                value={searchInput}
                prop={isSaveClick}
                onChange={this.onChangeInput}
              />
            ) : (
              <EditText>{searchInput}</EditText>
            )}
            <SaveButton
              type="button"
              onClick={this.onClickButton}
              prop={isSaveClick}
            >
              {isSaveClick ? 'Save' : 'Edit'}
            </SaveButton>
          </InputAndButtonContainer>
        </TextCard>
      </BgColor>
    )
  }
}

export default Home
