"use client";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { MdPeopleAlt } from "react-icons/md";
import Missao from "./components/missao";
import Link from "next/link";
import Escolha from "./components/escolha";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;


const Main = styled.main`
  background-color: #f8fafc;
  overflow-x: hidden;
  font-family: "Inter", sans-serif;
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
  padding: 4rem 2rem;
  gap: 2.5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1280px) {
    padding: 3.5rem 2rem;
    gap: 2rem;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2.5rem 1.5rem;
    min-height: auto;
  }
`;


const Content = styled.div`
  max-width: 680px;
  width: 100%;
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${fadeUp} 0.6s ease both;

  @media (max-width: 1024px) {
    align-items: center;
    padding: 1.2rem 0.5rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 900;
    color: #018762;
    letter-spacing: -0.5px;
    margin-bottom: 1rem;
    line-height: 1.05;
    transition: all 0.25s ease;

    @media (max-width: 1024px) {
      font-size: 2.4rem;
      text-align: center;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    margin-top: 0.5rem;
    line-height: 1.75;
    color: #333;
    font-size: 1.05rem;
    max-width: 560px;

    @media (max-width: 1024px) {
      font-size: 1rem;
      text-align: center;
      padding: 0 1rem;
      max-width: 640px;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 640px;
  padding: 1rem;
  box-sizing: border-box;
  animation: ${fadeUp} 0.6s ease 0.08s both;

  .hero-img {
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
    transition: transform 0.45s ease;
  }

  &:hover .hero-img {
    transform: scale(1.02);
  }

  @media (max-width: 1024px) {
    max-width: 420px;
    padding: 0;
    margin-top: 1rem;
  }

  @media (max-width: 480px) {
    max-width: 340px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 1.5rem;
  width: 100%;

  /* centralizar no mobile */
  @media (max-width: 1024px) {
    justify-content: center;
  }

  button {
    padding: 12px 20px;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
    border: none;
    min-width: 160px;
    box-sizing: border-box;
  }

  #btnEncontrarProfissional {
    background: linear-gradient(135deg, #018762, #02a173);
    color: #fff;
    box-shadow: 0 6px 18px rgba(1, 135, 100, 0.12);
  }

  #btnEncontrarProfissional:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(1, 135, 100, 0.16);
  }

  button.secondary {
    background-color: #e8f7f2;
    color: #018762;
    border: 1px solid #cfeee4;
  }

  button.secondary:hover {
    background-color: #d0f0e7;
    transform: translateY(-3px);
  }

  /* botões ocuparem 100% em telas muito pequenas */
  @media (max-width: 360px) {
    button {
      min-width: 100%;
    }
  }
`;

const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  align-items: stretch;
  justify-items: center;
  margin: 64px auto;
  gap: 28px;
  width: 92%;
  max-width: 1200px;
  box-sizing: border-box;
  padding-bottom: 24px;

  .card {
    background: #fff;
    border: 1px solid #e9eef4;
    border-radius: 14px;
    padding: 1.75rem 1rem;
    text-align: center;
    box-shadow: 0 6px 18px rgba(16, 24, 40, 0.06);
    transition: transform 0.28s ease, box-shadow 0.28s ease;
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(16, 24, 40, 0.12);
  }

  .card h1 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #11263b;
    margin: 0;
  }

  .card p {
    font-size: 0.98rem;
    color: #555;
    margin: 0;
    line-height: 1.4;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 72px;
    border-radius: 16px;
    background: linear-gradient(180deg, #f6fdf9, #eaf9f1);
    box-shadow: inset 0 -6px 12px rgba(1, 135, 100, 0.02);
  }

  @media (max-width: 480px) {
    margin: 40px auto;
    gap: 18px;
  }
`;


export default function Home() {
  return (
    <Main>
      <Container>
        <Content>
          <h1>Cuidado de saúde para todas as pessoas</h1>
          <p>
            Conectamos você com profissionais de saúde qualificados e preparados
            para oferecer atendimento respeitoso e inclusivo à comunidade
            LGBTQIA+.
          </p>

          <ButtonContainer role="group" aria-label="Ações principais">
            <Link href="/profissionais">
            <button id="btnEncontrarProfissional" aria-label="Encontrar profissional">
              Encontrar Profissional →
            </button>
            </Link>

            <Link href="#missao" passHref >
              <button className="secondary" aria-label="Saber mais sobre a missão">
                Saiba Mais
              </button>
            </Link>
          </ButtonContainer>
        </Content>

        <ImageWrapper aria-hidden="false">

          <Image
            className="hero-img"
            src="/primeira.jpg"
            alt="Imagem principal"
            width={1200}
            height={1200}
            sizes="(max-width: 480px) 320px, (max-width: 1024px) 420px, 640px"
            style={{ borderRadius: 20 }}
            priority={false}
            loading="lazy"
          />
        </ImageWrapper>
      </Container>

      <Cards aria-label="Diferenciais">
        <div className="card" role="article" aria-labelledby="card1-title">
          <div className="icon" aria-hidden="true">
            <Image
              src="/assets/security-icon.a2112088.svg"
              width={48}
              height={48}
              alt=""
              loading="lazy"
            />
          </div>
          <h1 id="card1-title">Seguro e Confidencial</h1>
          <p>Seus dados protegidos com total privacidade</p>
        </div>

        <div className="card" role="article" aria-labelledby="card2-title">
          <div className="icon" aria-hidden="true">
            <MdPeopleAlt size={36} color="#018762" />
          </div>
          <h1 id="card2-title">Profissionais Qualificados</h1>
          <p>Especialistas preparados e acolhedores</p>
        </div>

        <div className="card" role="article" aria-labelledby="card3-title">
          <div className="icon" aria-hidden="true">
            <Image
              src="/assets/heart-icon.081c2229.svg"
              width={48}
              height={48}
              alt=""
              loading="lazy"
            />
          </div>
          <h1 id="card3-title">Atendimento Humanizado</h1>
          <p>Respeito e empatia em cada consulta</p>
        </div>
      </Cards>

      <Missao />
      <Escolha />
    </Main>
  );
}
