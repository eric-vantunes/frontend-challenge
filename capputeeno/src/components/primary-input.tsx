import styled from "styled-components";
import { SearchIcon } from "./Icons/search-icons";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
  width: 352px;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  background-color: var(--bg-secondary);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`
export const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

`
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function PrimaryInputWSearchIcon(props: InputProps){
  return (
    <InputContainer>
      <PrimaryInput {...props}/>
      <SearchIcon />
    </InputContainer>
  )
}