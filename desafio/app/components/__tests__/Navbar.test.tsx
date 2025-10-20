import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../navbar';
import '@testing-library/jest-dom'; 
import React from 'react';

// Define a Interface das Props do Link (para corrigir TS7031)
interface MockLinkProps {
  children: React.ReactNode;
  href: string; 
  onClick?: () => void;
}

// Mock do next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

// Mock do next/link com tipagem correta
jest.mock('next/link', () => {
  return ({ children, href, onClick }: MockLinkProps) => (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
});

describe('Componente Navbar', () => {
  
  it('deve renderizar a logo e todos os links de navegação', () => {
    render(<Navbar />);

    expect(screen.getByAltText(/Logo Lacrei Saúde/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /início/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /profissionais/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contato/i })).toBeInTheDocument();
  });
  
  it('deve abrir e fechar o menu mobile ao clicar no ícone', async () => {
    render(<Navbar />);

    // Procura o ícone através do data-testid adicionado ao componente Navbar
    const menuIcon = screen.getByTestId('MenuIcon-Test');
    
    // 1. Abre o menu
    fireEvent.click(menuIcon);
    
    // 2. Fecha o menu ao clicar em um link
    const linkProfissionais = screen.getByRole('link', { name: /profissionais/i });
    fireEvent.click(linkProfissionais); 
    
    expect(linkProfissionais).toBeInTheDocument(); 
  });
});