import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Footer from '../footer'; 
import '@testing-library/jest-dom'; 
import React from 'react';

// Define a Interface das Props do Link
interface MockLinkProps {
  children: React.ReactNode;
  href: string; 
  onClick?: () => void;
}

// Mock do next/link
jest.mock('next/link', () => {
  return ({ children, href }: MockLinkProps) => (
    // Renderiza <a> com href para o RTL reconhecer a role 'link'
    <a href={href}>{children}</a> 
  );
});

// Mock da função window.scrollTo
global.scrollTo = jest.fn();


describe('Footer Component', () => {
  
  it('renderiza a seção de links úteis', () => {
    render(<Footer />);
    expect(screen.getByRole('heading', { name: /Links úteis/i })).toBeInTheDocument();

    // TESTE CORRIGIDO: Agora o mock e o componente (com href) permitem encontrar o link
    const missionLink = screen.getByRole('link', { name: /Nossa Missão/i }); 
    expect(missionLink).toBeInTheDocument();
    
    // Teste extra para confirmar que os links sociais (com aria-label) também funcionam
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument();
  });

  it('renderiza o aviso de copyright com o ano atual', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} Lacrei Saúde — Todos os direitos reservados.`)).toBeInTheDocument();
  });

  it('renderiza o botão de scroll-to-top e dispara scroll ao clicar', async () => {
    render(<Footer />);
    
    // TESTE CORRIGIDO: Procura pelo data-testid="scroll-top"
    const scrollButton = screen.getByTestId('scroll-top'); 
    expect(scrollButton).toBeInTheDocument();

    await userEvent.click(scrollButton);

    // Verifica se a função de scroll foi chamada
    expect(global.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});