"use client";
import styled from "styled-components";

const Mission = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #f9fafc, #eef2f7);
  color: #222;
  font-family: "Inter", sans-serif;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #018762;
    margin-bottom: 2rem;
    position: relative;
  }

  h1::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: #014C37;
    margin: 10px auto 0;
    border-radius: 2px;
  }

  p {
    max-width: 800px;
    line-height: 1.8;
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default function Missao() {
  return (
    <Mission id="missao">
      <h1>Nossa Missão</h1>
      <p>
        A Lacrei Saúde nasceu para transformar o acesso à saúde da população
        LGBTQIA+ no Brasil. Conectamos pessoas com profissionais qualificados e
        preparados para oferecer atendimento humanizado, seguro e livre de
        discriminação.
      </p>
      <p>
        Acreditamos que toda pessoa merece ser acolhida e respeitada em sua
        integralidade. Por isso, trabalhamos para criar uma rede de cuidado que
        celebra a diversidade e promove a saúde com dignidade.
      </p>
    </Mission>
  );
}
