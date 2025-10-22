"use client";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { MdPeopleAlt } from "react-icons/md";
import Missao from "./components/missao";
import Link from "next/link";
import Escolha from "./components/escolha";


const colors = {
  emerald10: "#DFF2ED",
  emerald20: "#B2DFD0",
  emerald30: "#80CAB1",
  emerald70: "#007756",
  emerald80: "#014C37",
  green10: "#EBF9F0",
};


const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Main = styled.main`
  background-color: ${colors.emerald10};
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

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
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
  }

  h1 {
    font-size: 3rem;
    font-weight: 900;
    color: ${colors.emerald70};
    margin-bottom: 1rem;
    line-height: 1.05;

    @media (max-width: 1024px) {
      font-size: 2.4rem;
      text-align: center;
    }
  }

  p {
    line-height: 1.75;
    color: ${colors.emerald80};
    font-size: 1.05rem;
    max-width: 560px;
    margin-top: 0.5rem;

    @media (max-width: 1024px) {
      text-align: center;
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
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    transition: transform 0.45s ease;
  }

  &:hover .hero-img {
    transform: scale(1.02);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 1.5rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  button {
    padding: 12px 20px;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    border: none;
    min-width: 160px;
    transition: all 0.22s ease;
  }

  #btnEncontrarProfissional {
    background: linear-gradient(135deg, ${colors.emerald70}, ${colors.emerald80});
    color: #fff;
    box-shadow: 0 6px 18px rgba(1, 135, 100, 0.12);
  }

  #btnEncontrarProfissional:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(1, 135, 100, 0.16);
  }

  button.secondary {
    background-color: ${colors.green10};
    color: ${colors.emerald70};
    border: 1px solid ${colors.emerald20};
  }

  button.secondary:hover {
    background-color: ${colors.emerald10};
    transform: translateY(-3px);
  }
`;

const Cards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 28px;
  width: 92%;
  max-width: 1200px;
  margin: 64px auto;
  padding-bottom: 24px;

  .card {
    background: #fff;
    border: 1px solid ${colors.emerald20};
    border-radius: 14px;
    padding: 1.75rem 1rem;
    text-align: center;
    box-shadow: 0 6px 18px rgba(16, 24, 40, 0.06);
    transition: transform 0.28s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(16, 24, 40, 0.12);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 72px;
    border-radius: 16px;
    background: ${colors.emerald10};
  }

  .card h1 {
    color: ${colors.emerald80};
    font-size: 1.25rem;
    font-weight: 700;
  }

  .card p {
    color: #555;
    font-size: 0.98rem;
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

            <Link href="#missao" passHref>
              <button className="secondary" aria-label="Saber mais sobre a missão">
                Saiba Mais
              </button>
            </Link>
          </ButtonContainer>
        </Content>

        <ImageWrapper>
          <Image
            className="hero-img"
            src="/primeira.jpg"
            alt="Imagem principal"
            width={1200}
            height={1200}
            priority
          />
        </ImageWrapper>
      </Container>

      <Cards aria-label="Diferenciais">
        <div className="card">
          <div className="icon">
            <Image src="/assets/security-icon.a2112088.svg" width={48} height={48} alt="" />
          </div>
          <h1>Seguro e Confidencial</h1>
          <p>Seus dados protegidos com total privacidade</p>
        </div>

        <div className="card">
          <div className="icon">
            <MdPeopleAlt size={36} color={colors.emerald70} />
          </div>
          <h1>Profissionais Qualificados</h1>
          <p>Especialistas preparados e acolhedores</p>
        </div>

        <div className="card">
          <div className="icon">
            <Image src="/assets/heart-icon.081c2229.svg" width={48} height={48} alt="" />
          </div>
          <h1>Atendimento Humanizado</h1>
          <p>Respeito e empatia em cada consulta</p>
        </div>
      </Cards>

      <Missao />
      <Escolha />
    </Main>
  );
}
