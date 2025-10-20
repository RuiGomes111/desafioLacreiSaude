"use client";
import styled from "styled-components";


const Vantagens = styled.section`
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

  h2{
    color: #11263b;
    font-size: 1rem;
    font-weight: 700;
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

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
export default function Escolha() {
  return (
    <Vantagens>
      <h1>Por que escolher a Lacrei?</h1>
      <p>
        Mais do que uma plataforma, somos uma comunidade comprometida com seu
        bem-estar
      </p>
      <Cards>
        <div className="card">
          <h2>Profissionais Capacitados</h2>
          <p>
            Todos os profissionais passam por treinamento em atendimento
            inclusivo
          </p>
        </div>

        <div className="card">
          <h2>Busca Personalizada</h2>
          <p>
            Encontre especialistas que atendem suas necessidades específicas
          </p>
        </div>

        <div className="card">
          <h2>Avaliações Reais</h2>
          <p>Feedback transparente da nossa comunidade</p>
        </div>

        <div className="card">
          <h2>Privacidade Garantida</h2>
          <p>Seus dados protegidos com segurança máxima</p>
        </div>
      </Cards>
    </Vantagens>
  );
}
