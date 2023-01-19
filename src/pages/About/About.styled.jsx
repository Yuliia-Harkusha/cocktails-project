import styled from 'styled-components';

export const Heading = styled.h3`
  text-align: center;
  color: ${props => props.theme.colors.accent};
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const Text = styled.p`
  margin-bottom: ${props => props.theme.spacing(4)};
  font-weight: 500;
  line-height: 1.8;
  letter-spacing: 1.3px;
  color: ${props => props.theme.colors.gray};
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  margin-bottom: ${props => props.theme.spacing(6)};

  @media screen and (min-width: 768px) {
    width: 550px;
  }
`;

export const Href = styled.a`
  color: ${props => props.theme.colors.hover};
  &:visited {
    ${props => props.theme.colors.accent};
  }
`;
