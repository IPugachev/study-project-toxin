import styled from 'styled-components'
import Check from '../../../../assets/icons/check.svg'

export const Checkbox = styled.div`
  width: 256px;
  margin: ${({ margin }) => margin || '0'};
`
export const Title = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.darkShade100};
  display: ${({ title }) => (title && 'flex') || 'none'};
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 16px;
  cursor: ${({ type }) => (type === 'list' ? 'pointer' : 'default')};
`

export const CheckboxContainer = styled.div`
  position: relative;
`
export const Wrapper = styled.div`
  position: ${({ type }) => (type === 'list' ? 'absolute' : 'static')};
  top: 0;
  transition: opacity 0.2s linear;
  opacity: ${({ type, visible }) => (type === 'list' && !visible ? 0 : 1)};
  pointer-events: ${({ type, visible }) => (type === 'list' && !visible ? 'none' : 'auto')};
`
export const Label = styled.label`
  font-size: 14px;
  width: 225px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.darkShade50};
  display: inline-flex;
  align-items: flex-start;
  user-select: none;
  margin-bottom: 12px;
  cursor: pointer;
  &::before {
    margin-right: 10px;
    content: '';
    top: 0;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    box-sizing: border-box;
    border: 1px solid rgba(31, 32, 65, 0.25);
    border-radius: 4px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center;
  }
`
export const Input = styled.input`
  z-index: -1;
  opacity: 0;
  width: 20px;
  height: 20px;
  position: absolute;
  &:checked + ${Label}::before {
    background-image: url(${Check});
    border: 1px solid rgba(188, 156, 255, 1);
  }
`
