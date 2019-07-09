import { getGreeting } from '../support/app.po';

describe('ts-imports-demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ts-imports-demo!');
  });
});
