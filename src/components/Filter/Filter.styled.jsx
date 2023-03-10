import styled from 'styled-components';

export const FilterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-bottom: 30px;

  @media screen and (min-width: 460px) {
    gap: 50px;
  }
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  appearance: none;
  background-color: #fff;
  margin-right: 5px;
  display: inline-grid;
  place-content: center;
  width: 20px;
  height: 20px;
  border: 3px solid ${props => props.theme.colors.accent};
  border-radius: 25%;
  color: ${props => props.theme.colors.hover};
  cursor: pointer;

  ::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 25%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${props => props.theme.colors.hover};
  }

  :checked::before {
    transform: scale(1);
  }

  @media screen and (min-width: 460px) {
    margin-right: 10px;
  }
`;

export const Label = styled.label`
  letter-spacing: 0.08rem;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 600;
  color: ${props => props.theme.colors.lightGray};

  @media screen and (min-width: 460px) {
    letter-spacing: 0.1rem;
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;
