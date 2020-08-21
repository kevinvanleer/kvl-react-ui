import styled from 'styled-components'
import Color from 'color'

export const Link = styled.a`
  color: ${(props) => props.color};
  text-decoration: none;

  &:visited {
    color: ${(props) => props.color};
  }

  &:hover {
    color: ${(props) => Color(props.color).lighten(0.5)};
  }

  &:active {
    color: ${(props) => Color(props.color).darken(0.5)};
  }

  &:focus {
    color: ${(props) => Color(props.color).lighten(0.5)};
  }
`

Link.defaultProps = {
  color: '#38c9e4'
}
