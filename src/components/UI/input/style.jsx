import styled from 'styled-components'
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrow-down.svg'
import ArrowForwardPath from '../../../assets/icons/arrow-forward-email.svg'

export const Input = styled.div`
  width: ${({ width }) => width || '320px'};
  margin: ${({ margin }) => margin || '0'};
`
export const Title = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.darkShade100};
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 5px;
  display: ${({ title }) => (title ? 'block' : 'none')};
`
export const Wrapper = styled.div`
  position: relative;
`
export const ErrorMessage = styled.p`
  color: #c92d2c;
  font-size: 12px;
  line-height: 14px;
  margin-top: 5px;
  display: ${({ error }) => (error && 'block') || 'none'};
`

export const InputField = styled.input`
  width: 100%;
  color: ${({ styled, theme }) => (styled === 'date' ? theme.colors.darkShade75 : theme.colors.darkShade25)};
  border: ${({ error }) => (error && '1px solid #c92d2c') || '1px solid rgba(31, 32, 65, 0.25)'};
  border-radius: 4px;
  padding: 12px 15px;
  font-size: 14px;
  line-height: 18px;
  pointer-events: ${({ styled }) => (styled === 'date' ? 'none' : 'auto')};
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.darkShade75};
    border: ${({ error }) => (error && '1px solid #c92d2c') || '1px solid rgba(31, 32, 65, 0.5)'};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.darkShade75};
    border: 1px solid rgba(31, 32, 65, 0.5);
  }
  &::placeholder {
    opacity: 0.75;
  }
  &:focus + ${ErrorMessage} {
    display: none;
  }
`
export const Arrow = styled(ArrowDown)`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  display: ${({ styled }) => (styled === 'date' ? 'block' : 'none')};
`
export const ArrowEmail = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  right: 0;
  top: 0;
  background-image: url(${ArrowForwardPath});
  cursor: pointer;
  display: ${({ styled }) => (styled === 'email' ? 'block' : 'none')};
`
