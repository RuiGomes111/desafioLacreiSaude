"use client";
import styled from "styled-components";
import Image from "next/image";
import { MdPeopleAlt } from "react-icons/md";
import Missao from "./components/missao";
import Link from "next/link";
import Escolha from "./components/escolha"
const Main = styled.div``;

const Container = styled.div`
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
  padding: 2rem;
  gap: 2rem;
  width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 1.5rem;
  }
`;

const Content = styled.div`
  max-width: 500px;
  padding: 2rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #018762;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    margin-top: 1rem;
    line-height: 1.6;
    color: #222;
    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
`;

const ImageWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    margin-top: 0;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
  object-fit: cover;
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  margin-top: 1rem;

  #btnEncontrarProfissional {
    background-color: #f1c580;
  }

  #btnEncontrarProfissional:hover {
    background-color: #f3d199;
  }

  button {
    padding: 10px 20px;
    border: 1px solid;
    border-radius: 5px;
    color: #11263b;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  button:hover {
    background-color: #dff2ed;
    transform: scale(1.05);
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  margin: 80px auto;
  gap: 20px;
  width: 90%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .card {
    width: 100%;
    max-width: 350px;
    height: 200px;
    padding: 10px;
    background-color: #fff;
    color: #444;
    border: 1px solid #e0e0e0;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  }

  .card h1 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 6px;
    text-align: center;
  }

  .card p {
    text-align: center;
    font-size: 1rem;
    margin-top: 8px;
    padding: 0 10px;
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
          <ButtonContainer>
            <button id="btnEncontrarProfissional">
              Encontrar Profissional →
            </button>
            <Link href="#missao">
              <button>Saiba Mais</button>
            </Link>
          </ButtonContainer>
        </Content>

        <ImageWrapper>
          <StyledImage
            src="/primeira.jpg"
            width={600}
            height={600}
            alt="imagem principal"
          />
        </ImageWrapper>
      </Container>

      <Cards>
        <div className="card">
          <Image
            src="/assets/security-icon.a2112088.svg"
            width={60}
            height={60}
            alt="icone segurança"
          />
          <h1>Seguro e Confidencial</h1>
          <p>Seus dados protegidos com total privacidade</p>
        </div>

        <div className="card">
          <MdPeopleAlt size={50} />
          <h1>Profissionais Qualificados</h1>
          <p>Especialistas preparados e acolhedores</p>
        </div>

        <div className="card">
          <Image
            src="/assets/heart-icon.081c2229.svg"
            width={60}
            height={60}
            alt="icone coração"
          />
          <h1>Atendimento Humanizado</h1>
          <p>Respeito e empatia em cada consulta</p>
        </div>
      </Cards>

      <Missao />
      <Escolha/>
    </Main>
  );
}
