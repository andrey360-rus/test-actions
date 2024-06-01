import styled from "styled-components";

export const PdfFormContainer=styled.div`
   max-width: 500px;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
`

export const InputFlex= styled.div`
display: flex;
flex-direction: column;
gap:5px`

export const StyledInput=styled.input`
    margin: 10px 0;
    padding: 8px;
    border: 1px solid var(--blue);
    border-radius: 5px;
    font-family: "Noto Serif", serif;

    &:focus {
        outline: none;
        border-color: var(--light-blue);
    }`

export const StyledInputTypeFile = styled.label`
  display: block;
  position: relative;
  margin: 10px 0;
  padding: 8px;
  border: 1px solid var(--blue);
  border-radius: 5px;
  font-family: "Noto Serif", serif;
  cursor: pointer;

  &:focus-within {
    outline: none;
    border-color: var(--light-blue);
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    opacity: 0;
    overflow: hidden;
    z-index: -1;
  }

  .upload-icon {
    margin-right: 8px;  // Опциональный отступ для иконки
  }
`;
export const SubmitButton = styled.button`
  font-family: "Noto Serif", serif;
  background-color: var(--blue);
  border: none;
  border-radius: 10px;
  color: var(--white);
  padding: 10px 40px;
  height: fit-content;
  margin-top: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:focus-visible,
  &:hover &:active {
    color: var(--grey-light);
  }

  &:focus {
    color: none;
  }

  &:disabled {
    color: var(--light-blue);
    background-color: #2f84afca;
    cursor: not-allowed;
  }
`;
