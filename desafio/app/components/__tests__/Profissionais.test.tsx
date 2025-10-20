import { render, screen, waitFor } from '@testing-library/react';
import Profissionais from '../../profissionais/page'; 
import '@testing-library/jest-dom'; 

// 1. MOCK DE DADOS
const mockDados = [
  {
    id: 1,
    nome: 'Dr. Lucas Silva',
    especialidade: 'Psicólogo Clínico',
    localizacao: 'São Paulo - SP',
    avaliacao: 4.5,
    foto: '/img/lucas.jpg',
    descricao: 'Especialista em terapia cognitiva.',
  },
  {
    id: 2,
    nome: 'Dra. Ana Costa',
    especialidade: 'Nutricionista',
    localizacao: 'Rio de Janeiro - RJ',
    avaliacao: 5,
    foto: '/img/ana.jpg',
    descricao: 'Foco em saúde da população LGBTQIA+.',
  },
];

// 2. MOCK DO FETCH E CORREÇÃO DE TIPAGEM + ACT WARNING
// Asserção de tipo para informar ao TS que fetch é um Jest Mock Function
const mockedFetch = global.fetch as jest.Mock; 

global.fetch = jest.fn(() =>
  // Envolvemos em Promise.resolve().then() para simular um microtask (async real) 
  // e evitar o 'act warning'
  Promise.resolve().then(() => ({
    ok: true,
    status: 200,
    // Tipamos o retorno da função json()
    json: () => Promise.resolve(mockDados),
  } as Response)) // Type Assertion para satisfazer a interface Response
);


describe('Componente Profissionais (Com Fetch de Dados)', () => {

  beforeEach(() => {
    // Usa a variável tipada 'mockedFetch' para chamar mockClear()
    mockedFetch.mockClear(); 
  });

  // Teste 1: Estado Inicial de Carregamento
  it('deve exibir a mensagem de carregamento inicialmente', () => {
    render(<Profissionais />);
    expect(screen.getByText(/carregando profissionais/i)).toBeInTheDocument();
  });
  
  // Teste 2: Renderização após o carregamento dos dados
  it('deve renderizar a lista de profissionais após o carregamento', async () => {
    render(<Profissionais />);
    
    // Espera a resolução do fetch (que aciona o state update)
    await waitFor(() => {
        expect(screen.queryByText(/carregando profissionais/i)).not.toBeInTheDocument();
    });
    
    expect(screen.getByRole('heading', { name: /Dr. Lucas Silva/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Dra. Ana Costa/i })).toBeInTheDocument();
  });

  // Teste 3: Lógica da Função renderStars e botões
  it('deve exibir a avaliação (estrelas) correta e o botão de perfil', async () => {
    render(<Profissionais />);
    
    await waitFor(() => {
      // Verifica a avaliação do Dr. Lucas (4.5 estrelas: "★★★★⯪")
      expect(screen.getByText('★★★★⯪')).toBeInTheDocument();

      // Verifica a avaliação da Dra. Ana (5 estrelas: "★★★★★")
      expect(screen.getByText('★★★★★')).toBeInTheDocument();
      
      // Verifica se o botão "Ver Perfil" é renderizado
      const buttons = screen.getAllByRole('button', { name: /ver perfil/i });
      expect(buttons).toHaveLength(mockDados.length); 
    });
  });
});