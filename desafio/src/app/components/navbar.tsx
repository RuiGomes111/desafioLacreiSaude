"use client";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
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
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  color: #4FB494;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #80CAB1;
    transform: translateY(-2px);
  }

  &.active {
    color: #80CAB1;
    border-bottom: 2px solid #ff5733;
    padding-bottom: 4px;
  }
`;

export default function Navbar() {
  return (
    <Header>      
      <Image src="/assets/global-logo.e41aea7b.svg" width={80} height={80} alt="logo lacrei saude"/>
      <Nav>
        <ul>
          <li>
            <NavLink href="/">Início</NavLink>
          </li>
          <li>
            <NavLink href="/profissionais">Profissionais</NavLink>
          </li>
        </ul>
      </Nav>
    </Header>
  );
}
