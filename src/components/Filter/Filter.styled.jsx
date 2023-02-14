import styled from 'styled-components';

export const FilterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-bottom: 30px;
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  appearance: none;
  background-color: #fff;
  margin-right: 10px;
  display: inline-grid;
  place-content: center;
  width: 1.3em;
  height: 1.3em;
  border: 0.15em solid ${props => props.theme.colors.accent};
  border-radius: 25%;
  color: ${props => props.theme.colors.hover};
  cursor: pointer;

  ::before {
    content: '';
    width: 0.5em;
    height: 0.5em;
    border-radius: 25%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${props => props.theme.colors.hover};
  }

  :checked::before {
    transform: scale(1);
  }
`;

export const Label = styled.label`
  letter-spacing: 0.1rem;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 600;
  color: ${props => props.theme.colors.lightGray};
`;
