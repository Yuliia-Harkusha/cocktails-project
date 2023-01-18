import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerWrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  padding-top: ${props => props.theme.spacing(4)};
  padding-left: ${props => props.theme.spacing(2)};
  padding-right: ${props => props.theme.spacing(2)};

  @media screen and (min-width: 450px) {
    width: 420px;
    padding: ${props => props.theme.spacing(4)};
  }

  @media screen and (min-width: 768px) {
    width: 700px;
    padding: ${props => props.theme.spacing(5)};
  }

  @media screen and (min-width: 1200px) {
    width: 900px;
  }
`;

export const LinkBtn = styled(Link)`
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.radii.primary};
  transition: ${props => props.theme.animation.cubicBezier};
  :hover,
  :focus {
    color: ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors.hover};
  }
`;
