import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './page';

describe('Home', () => {
  it('名前が表示される', () => {
    render(<Home />);
    expect(screen.getByText('arc680')).toBeInTheDocument();
  });

  it('スキルセットが表示される', () => {
    render(<Home />);
    expect(screen.getByText('フロントエンド: React, Next.js')).toBeInTheDocument();
    expect(screen.getByText('バックエンド: Java, Kotlin, Spring Boot')).toBeInTheDocument();
  });

  it('Links セクションのリンクが表示される', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Github' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument();
  });
});
