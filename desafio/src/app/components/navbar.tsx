"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #ffffff, #f3f4f6);
  padding: 1.2rem 3rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
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
    color: #018762;
    letter-spacing: -0.5px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      flex-direction: column;
      position: absolute;
      top: 80px;
      right: ${({ open }) => (open ? "0" : "-100%")};
      background-color: #ffffff;
      width: 70%;
      height: calc(100vh - 80px);
      padding: 2rem;
      box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
      transition: right 0.4s ease;
      align-items: center;
      justify-content: flex-start;
      gap: 1.5rem;
      z-index: 99;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  color: #018762;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #02a173;
    transform: translateY(-2px);
  }

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #018762;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #02a173;
    font-weight: 700;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  color: #018762;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #02a173;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

      <Nav open={open}>
        <ul>
          <li>
            <NavLink href="/" onClick={() => setOpen(false)}>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink href="/profissionais" onClick={() => setOpen(false)}>
              Profissionais
            </NavLink>
          </li>
          <li>
            <NavLink href="#contacto" onClick={() => setOpen(false)}>
              Contato
            </NavLink>
          </li>
        </ul>
      </Nav>

      <MenuIcon onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </MenuIcon>
    </Header>
  );
}
