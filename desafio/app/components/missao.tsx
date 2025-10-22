"use client";
import styled from "styled-components";
import Image from "next/image";

const colors = {
  emerald10: "#DFF2ED",
  emerald20: "#B2DFD0",
  emerald30: "#80CAB1",
  emerald70: "#007756",
  emerald80: "#014C37",
  green10: "#EBF9F0",
};

const Mission = styled.section`
  min-height: 100vh;
  padding: 6rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  justify-items: center;
  background: linear-gradient(135deg, ${colors.emerald10}, ${colors.green10});
  color: #222;
  font-family: "Inter", sans-serif;
  overflow: hidden;
  position: relative;

  h1 {
    grid-column: 1 / -1;
    font-size: 3rem;
    font-weight: 800;
    color: ${colors.emerald70};
    text-align: center;
    margin-bottom: 2rem;
    position: relative;
    letter-spacing: -0.5px;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  h1::after {
    content: "";
    display: block;
    width: 70px;
    height: 4px;
    background-color: ${colors.emerald80};
    margin: 12px auto 0;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }

  h1:hover::after {
    width: 120px;
    background-color: ${colors.emerald70};
  }

  .imageWrap {
    width: 100%;
    max-width: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.6s ease;
  }

  .imageWrap:hover {
    transform: scale(1.05);
  }

  .content {
    text-align: left;
    max-width: 560px;
    line-height: 1.8;
    font-size: 1.1rem;
    background: ${colors.emerald10}a3;
    backdrop-filter: blur(8px);
    padding: 2rem;
    border-radius: 1.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
  }

  .content:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  }

  .content p {
    color: #333;
    margin-bottom: 1rem;
  }

  .content p:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 4rem 2rem;
    gap: 3rem;

    h1 {
      font-size: 2.4rem;
    }

    .imageWrap {
      max-width: 320px;
    }

    .content {
      text-align: center;
      max-width: 100%;
      padding: 1.8rem;
    }
  }

  @media (max-width: 600px) {
    padding: 3rem 1.5rem;

    h1 {
      font-size: 2rem;
    }

    .content {
      font-size: 1rem;
    }
  }
`;

export default function Missao() {
  return (
    <Mission id="missao" aria-labelledby="missao-title">
      <h1 id="missao-title">Nossa Missão</h1>

      <div className="imageWrap">
        <Image
          src="/assets/people-holding-flag.8d096827.png"
          alt="Pessoas segurando bandeira colorida"
          width={480}
          height={480}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            borderRadius: "1.5rem",
          }}
          loading="lazy"
        />
      </div>

      <div className="content">
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
      </div>
    </Mission>
  );
}