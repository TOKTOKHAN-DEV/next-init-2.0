import React from 'react';
import mount from 'cypress/mount';
import Text from './index';

describe('text component', function () {
  before(function () {
    cy.fixture('screen-size.json').then((screenSize) => {
      this.screenSize = screenSize;
    });
  });

  describe('large pc resolution', function () {
    beforeEach(function () {
      cy.viewport(this.screenSize.largePc, 1080);
    });

    it('sm', function () {
      mount(
        <Text textStyle="sm" data-cy="text">
          Tok.D 디자인 시스템
        </Text>,
      );

      cy.get('[data-cy=text]').should('have.css', 'font-size', '12px');
      cy.get('[data-cy=text]').should('have.css', 'line-height', '18px');
    });
  });

  describe('small pc resolution', function () {
    beforeEach(function () {
      cy.viewport(this.screenSize.smallPc, 1080);
    });

    it('md', function () {
      mount(
        <Text textStyle="md" data-cy="text">
          Tok.D 디자인 시스템
        </Text>,
      );

      cy.get('[data-cy=text]').should('have.css', 'font-size', '15px');
      cy.get('[data-cy=text]').should('have.css', 'line-height', '27px');
    });
  });

  describe('tab resolution', function () {
    beforeEach(function () {
      cy.viewport(this.screenSize.tab, 1080);
    });

    it('lg', function () {
      mount(
        <Text textStyle="lg" data-cy="text">
          Tok.D 디자인 시스템
        </Text>,
      );

      cy.get('[data-cy=text]').should('have.css', 'font-size', '20px');
      cy.get('[data-cy=text]').should('have.css', 'line-height', '29px');
    });
  });

  describe('mobile resolution', function () {
    beforeEach(function () {
      cy.viewport(this.screenSize.mobile, 1080);
    });

    it('xl', function () {
      mount(
        <Text textStyle="xl" data-cy="text">
          Tok.D 디자인 시스템
        </Text>,
      );

      cy.get('[data-cy=text]').should('have.css', 'font-size', '26px');
      cy.get('[data-cy=text]').should('have.css', 'line-height', '38px');
    });
  });
});
