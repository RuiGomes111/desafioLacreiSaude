"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const colors = {
  emerald10: "#DFF2ED",
  emerald20: "#B2DFD0",
  emerald30: "#80CAB1",
  emerald70: "#007756",
  emerald80: "#014C37",
  green10: "#EBF9F0",
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #ffffff, ${colors.emerald10});
  padding: 1.2rem 3rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100vw;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    border-radius: 8px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${colors.emerald70};
    letter-spacing: -0.5px;
  }
`;

interface NavProps {
  open: boolean;
}

const Nav = styled.nav<NavProps>`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      position: fixed;
      top: 0;
      right: ${({ open }) => (open ? "0" : "-100%")};
      background-color: ${colors.emerald10};
      width: 70%;
      height: 100vh;
      padding: 4rem 2rem;
      box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
      transition: right 0.4s ease;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 1.5rem;
      z-index: 99;
      overflow-y: auto;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.emerald70};
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${colors.emerald30};
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${colors.emerald70};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: ${colors.emerald30};
    font-weight: 700;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  color: ${colors.emerald70};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.emerald30};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <Header>
      <Logo>
        <Image
          src="/assets/logo_lacrei_desktop.7ae004ab.svg"
          width={120}
          height={120}
          alt="Logo Lacrei Saúde"
          loading="lazy"
        />
      </Logo>

      <Nav open={isOpen} ref={navRef}>
        <ul>
          <li>
            <NavLink href="/" onClick={() => setIsOpen(false)}>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink href="/profissionais" onClick={() => setIsOpen(false)}>
              Profissionais
            </NavLink>
          </li>
          <li>
            <NavLink href="#contacto" onClick={() => setIsOpen(false)}>
              Contato
            </NavLink>
          </li>
        </ul>
      </Nav>

      <MenuIcon onClick={() => setIsOpen(!isOpen)} data-testid="MenuIcon-Test">
        {isOpen ? <FiX /> : <FiMenu />}
      </MenuIcon>
    </Header>
  );
}