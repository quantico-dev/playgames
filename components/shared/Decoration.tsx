import styled from 'styled-components'

import Line, { Colors } from './Line'

type DecorationProps = {
  small: Colors
  medium: Colors
}

const Decoration = ({ small, medium }: DecorationProps) => (
  <StyledDecoration>
    <Line small color={small} />
    <Line color={medium} />
  </StyledDecoration>
)

const StyledDecoration = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`

export default Decoration
