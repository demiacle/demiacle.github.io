import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import projects from './portfolioData';

describe('App', () => {
  it('has one h1 and a labelled projects section', () => {
    render(<App />);
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('region', { name: /projects/i })).toBeInTheDocument();
  });

  it('renders one card per project, linking only those with a URL', () => {
    render(<App />);
    const section = screen.getByRole('region', { name: /projects/i });
    const cards = within(section).getAllByRole('article');
    expect(cards).toHaveLength(projects.length);

    projects.forEach((project, i) => {
      const card = within(cards[i]);
      expect(card.getByRole('heading', { level: 3 })).toHaveTextContent(project.title);
      const link = card.queryByRole('link');
      if (project.url_link) {
        expect(link).toHaveAttribute('href', project.url_link);
      } else {
        expect(link).toBeNull();
      }
    });
  });

  it('gives every header link an accessible name', () => {
    render(<App />);
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    for (const link of within(nav).getAllByRole('link')) {
      expect(link).toHaveAccessibleName();
    }
  });
});

describe('portfolioData', () => {
  it('is sorted by sort_order with unique titles', () => {
    const orders = projects.map((p) => p.sort_order);
    expect(orders).toEqual([...orders].sort((a, b) => a - b));
    expect(new Set(projects.map((p) => p.title)).size).toBe(projects.length);
  });
});
