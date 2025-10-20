"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";

const Profissional = styled.section`
  min-height: 100vh;
  padding: 6rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f9fafb;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #018762;
    text-align: center;
    margin-bottom: 3rem;

    span {
      color: black;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 1.5rem;
  border: 2px solid #018762; /* Adicionando borda verde */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    display: block;
  }

  h2 {
    color: #018762;
    font-size: 1.3rem;
    font-weight: 700;
  }

  p {
    color: #555;
    font-size: 1rem;
    margin: 0.2rem 0;
  }

  small {
    display: block;
    color: #777;
    font-size: 0.9rem;
    margin-top: 0.8rem;
  }

  .localizacao {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: #666;
    font-size: 0.95rem;
    margin: 0.3rem 0;
  }

  .avaliacao {
    color: #facc15; /* amarelo para estrelas */
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: #018762;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #02a173;
    transform: translateY(-2px);
  }
`;

export default function Profissionais() {
  const [dados, setDados] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch("/data/profissionais.json")
      .then((res) => res.json())
      .then((data) => {
        setDados(data);
        setCarregando(false);
      });
  }, []);

  const renderStars = (nota: number) => {
    const fullStars = Math.floor(nota);
    const halfStar = nota % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return (
      "★".repeat(fullStars) +
      (halfStar ? "⯪" : "") +
      "☆".repeat(emptyStars)
    );
  };

  return (
    <Profissional>
      <h1>
        <span>Encontre seu</span> Profissional de Saúde
      </h1>

      {carregando ? (
        <p>⏳ Carregando profissionais...</p>
      ) : (
        <Grid>
          {dados.map((p) => (
            <Card key={p.id}>
              <img src={p.foto} alt={p.nome} />
              <h2>{p.nome}</h2>
              <p>{p.especialidade}</p>
              <div className="localizacao">
                <GoLocation /> {p.localizacao}
              </div>
              <div className="avaliacao">{renderStars(p.avaliacao)}</div>
              <small>{p.descricao}</small>
              <Button>Ver Perfil</Button>
            </Card>
          ))}
        </Grid>
      )}
    </Profissional>
  );
}
