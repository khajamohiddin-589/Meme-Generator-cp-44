import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 90vh;
  max-height: 130vh;
  width: 100%;
  align-items: center;

  @media screen and (min-width: 577px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`
export const Heading = styled.h1`
  display: ${props => (props.bigScreen ? '' : 'none')};
  color: #35469c;
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: 600;
  @media screen and (min-width: 577px) {
    font-size: 40px;
  }
`

export const MemeGeneratorContainer = styled.form`
  order: 1;
  display: flex;
  flex-direction: column;
  width: 85vw;
  @media screen and (min-width: 577px) {
    order: 1;
  }
`
export const InputFieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
`
export const CustomLabel = styled.label`
  color: #5a7184;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 400;
  @media screen and (min-width: 577px) {
    font-size: 17px;
  }
`
export const CustomInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #d7dfe9;
  outline: none;
  font-size: 12px;
  font-family: 'Roboto';
  margin-top: 5px;
  @media screen and (min-width: 577px) {
    height: 50px;
    font-size: 15px;
  }
`
export const CustomSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  width: 80%;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
`
export const CustomOption = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
`
export const GenerateButton = styled.button`
  height: 40px;
  width: 140px;
  border-radius: 5px;
  color: white;
  background-color: #0b69ff;
  border: none;
  font-size: 14px;
  cursor: pointer;
`
export const MemeGeneratedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  order: 0;
  height: 350px;
  margin-top: 15px;
  width: 70%;
  background-size: cover;
  background-image: url(${props => props.backgroundImage});
  @media screen and (min-width: 577px) {
    margin-left: 25px;
    order: 2;
  }
`
export const TextContent = styled.p`
  color: white;
  font-size: ${props => props.fontSize}px;
  font-weight: 400;
`
