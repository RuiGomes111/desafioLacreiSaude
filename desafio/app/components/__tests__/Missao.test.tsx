import { render, screen } from '@testing-library/react';
import Missao from '../Missao'; // Ajuste o caminho conforme sua estrutura
import '@testing-library/jest-dom';

// Mock do componente next/image para evitar erros no Jest (boas práticas)
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // Simula a tag <img> com as props essenciais
    // Apenas para que o teste não falhe devido ao Image do Next.js
    return <img {...props} />;
  },
}));

describe('Componente Missao', () => {
  it('deve renderizar o título principal "Nossa Missão"', () => {
    render(<Missao />);
    
    // Busca o elemento h1 pelo seu texto (case-insensitive)
    const title = screen.getByRole('heading', { level: 1, name: /nossa missão/i });
    
    expect(title).toBeInTheDocument();
  });

  it('deve renderizar as duas frases principais da missão', () => {
    render(<Missao />);
    
    // Verifica a primeira frase (pode ser um trecho)
    expect(
      screen.getByText(/A Lacrei Saúde nasceu para transformar o acesso à saúde/i)
    ).toBeInTheDocument();
    
    // Verifica a segunda frase (outro trecho)
    expect(
      screen.getByText(/Acreditamos que toda pessoa merece ser acolhida e respeitada/i)
    ).toBeInTheDocument();
  });
  
  it('deve renderizar a imagem com o alt text correto', () => {
    render(<Missao />);
    
    // Busca o componente Image pelo seu alt text (descrição para acessibilidade)
    const image = screen.getByRole('img', { 
      name: /Pessoas segurando bandeira colorida/i 
    });
    
    expect(image).toBeInTheDocument();
    
    // Opcional: Verifica a URL da imagem (se for importante)
    expect(image).toHaveAttribute('src', '/assets/people-holding-flag.8d096827.png');
  });
});