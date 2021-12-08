import styled from 'styled-components'

export type Colors = 'red' | 'green' | 'blue' | 'orange' | 'yellow'

const Hex = {
  red: '#fc4d66',
  green: '#83c341',
  yellow: '#fec93f',
  orange: '#ff8800',
  blue: '#0f78d0',
}

type StyledLineProps = {
  small?: boolean
  color: Colors
}

const Line = ({ small = false, color }: StyledLineProps) => (
  <div>
    <StyledLine small={small} color={color} />
  </div>
)

const StyledLine = styled.span<StyledLineProps>`
  display: inline-flex;
  border-radius: 50rem;
  padding: 3px ${(props) => (props.small ? '15px' : '25px')};
  background-color: ${(props) => Hex[props.color]};
`

export default Line
