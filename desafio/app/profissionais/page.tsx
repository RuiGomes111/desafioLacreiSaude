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
      color: #1f2937; /* cinza escuro para contraste */
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
  background: #ffffff;
  border-radius: 1.5rem;
  border: 2px solid #018762;
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

  /* Texto principal */
  p {
    color: #2b2b2b;
    font-size: 1rem;
    margin: 0.2rem 0;
  }

  /* Localização */
  .localizacao {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: #1f2937;
    font-size: 0.95rem;
    margin: 0.3rem 0;
  }

  /* Avaliação (estrelas) */
  .avaliacao {
    color: #d97706; /* laranja escuro com bom contraste */
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  /* Descrição */
  small {
    display: block;
    color: #374151;
    font-size: 0.9rem;
    margin-top: 0.8rem;
    line-height: 1.4;
  }
`;


const Button = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.6rem;
  background-color: #018762;
  color: #ffffff;
  font-weight: 600;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  font-size: 0.95rem;

  &:hover {
    background-color: #02a173;
    transform: translateY(-2px);
  }

  &:focus {
    outline: 3px solid #d97706; /* foco visível para acessibilidade */
    outline-offset: 2px;
  }
`;


//Componente principal


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
            <Card key={p.id} aria-label={`Profissional ${p.nome}`}>
              <img src={p.foto} alt={`Foto de ${p.nome}`} />
              <h2>{p.nome}</h2>
              <p>{p.especialidade}</p>
              <div className="localizacao">
                <GoLocation aria-hidden="true" /> {p.localizacao}
              </div>
              <div className="avaliacao" aria-label={`Avaliação ${p.avaliacao} de 5`}>
                {renderStars(p.avaliacao)}
              </div>
              <small>{p.descricao}</small>
              <Button aria-label={`Ver perfil de ${p.nome}`}>Ver Perfil</Button>
            </Card>
          ))}
        </Grid>
      )}
    </Profissional>
  );
}
