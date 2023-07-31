import styled from 'styled-components'

export const BgColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
  background-size: cover;
  height: 100vh;
`

export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
  justify-content: center;
  background-color: #ffffff;
  align-items: Center;
  border: 4px solid #00000;
  border-radius: 10px;
`

export const TextHeading = styled.h1`
  color: #000000;
  font-size: 25px;
  font-weight: 800;
  font-family: 'Roboto';
`
export const InputAndButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
`
export const Input = styled.input`
  border: ${props => (props.prop ? '1px solid #cbd2d9' : 'none')};
  padding-left: 8px;
  border-radius: 5px;
  margin-right: 10px;
  color: #000000;

  font-size: 18px;
`
export const SaveButton = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
  border-radius: 7px;
  cursor: pointer;
  border: none;
  padding-top: ${props => (props.prop ? '8px' : '0px')};
  padding-bottom: ${props => (props.prop ? '8px' : '0px')};
  padding-left: 14px;
  padding-right: 14px;
`

export const EditText = styled.p`
  color: #000000;
  font-size: 18px;
  margin-right: 20px;
`
