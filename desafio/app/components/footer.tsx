"use client";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { LuSquareArrowUp } from "react-icons/lu";

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #014c37, #018762);
  color: #fff;
  padding: 4rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 3rem;
  text-align: left;
  font-family: "Inter", sans-serif;
  position: relative;

  .brand {
    h2 {
      font-size: 1.8rem;
      font-weight: 800;
      margin-bottom: 0.8rem;
    }
    p {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #e0e0e0;
    }
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
      color: #e5e5e5;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 0.95rem;

      &:hover {
        color: #fff;
        transform: translateX(4px);
      }
    }
  }

  .social {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;

    a {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      transition: all 0.3s ease;

      &:hover {
        background: #fff;
        color: #018762;
        transform: scale(1.1);
      }
    }
  }

  .copy {
    grid-column: 1 / -1;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    margin-top: 2rem;
    padding-top: 1rem;
    font-size: 0.9rem;
    color: #dcdcdc;
  }

  /* Botão flutuante (arrow) */
  .scroll-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #018762;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    color: #fff; /* Adicionando cor branca para o ícone, se LuSquareArrowUp não herdar */

    &:hover {
      background: #fff;
      color: #018762;
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    .social {
      justify-content: center;
    }
  }
`;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterSection id="contacto">
      <div className="brand">
        <h2>Lacrei Saúde</h2>
        <p>
          Construindo um futuro mais inclusivo e acessível na saúde.  
          Cuidar de todos é nossa missão. ❤️
        </p>
      </div>

      <div className="links">
        <h3>Links úteis</h3>
        <Link href="#missao">Nossa Missão</Link>
        <Link href="#servicos">Serviços</Link>
        <Link href="#contato">Contato</Link>
        <Link href="#sobre">Sobre nós</Link>
      </div>

      <div>
        <h3>Siga-nos</h3>
        <div className="social">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className="copy">
        © {new Date().getFullYear()} Lacrei Saúde — Todos os direitos reservados.
      </div>

      <div 
        className="scroll-top" 
        onClick={scrollToTop}
        data-testid="scroll-top" 
      >
        <LuSquareArrowUp size={32} color="#fff" />
      </div>
    </FooterSection>
  );
}