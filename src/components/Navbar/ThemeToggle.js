import React from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0 10px;
  display: flex;
  align-items: center;
`;

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <ToggleButton onClick={toggleDarkMode}>
      {darkMode ? <FiSun /> : <FiMoon />}
    </ToggleButton>
  );
};

export default ThemeToggle;