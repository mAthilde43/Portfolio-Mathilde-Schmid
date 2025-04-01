import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { darkTheme, lightTheme } from "../../utils/Themes";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  position: relative;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 45%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    z-index: 1010;
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 50px;
  width: auto;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    height: 45px;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 60%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light};
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "9999" : "-1")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
  padding-right: 20px;
  z-index: 1010;
  position: relative;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    padding-right: 40px;
  }
`;

const Navbar = ({ toggleTheme }) => {
  const [open, setOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  const toggleThemeHandler = () => {
    setIsDarkMode(!isDarkMode);
    toggleTheme();
  };

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "#4c80e6",
              marginBottom: "20",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <NavItems>
          <NavLink href="#about">Accueil</NavLink>
          <NavLink href="#skills">Compétences</NavLink>
          <NavLink href="#experience">Expériences</NavLink>
          <NavLink href="#projects">Projets</NavLink>
          <NavLink href="#education">Formations</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton
            href="https://github.com/mAthilde43/Portfolio.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Profil Github
          </GithubButton>
        </ButtonContainer>
        <ThemeToggleContainer
          onClick={toggleThemeHandler}
          style={{ cursor: "pointer" }}
        >
          {isDarkMode ? (
            <FaSun size="25px" color="4C80E6" />
          ) : (
            <FaMoon size="25px" color="4C80E6" />
          )}
        </ThemeToggleContainer>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setOpen(!open);
            }}
          />
        </MobileIcon>
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLinks to="#about" onClick={() => setOpen(!open)}>
            Accueil
          </MobileMenuLinks>
          <MobileMenuLinks to="#skills" onClick={() => setOpen(!open)}>
            Compétences
          </MobileMenuLinks>
          <MobileMenuLinks to="#experience" onClick={() => setOpen(!open)}>
            Expériences
          </MobileMenuLinks>
          <MobileMenuLinks to="#projects" onClick={() => setOpen(!open)}>
            Projets
          </MobileMenuLinks>
          <MobileMenuLinks to="#education" onClick={() => setOpen(!open)}>
            Formations
          </MobileMenuLinks>

          <GithubButton
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: "white",
              width: "max-content",
            }}
            href="/"
            target="_blank"
          >
            Profil Github
          </GithubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
