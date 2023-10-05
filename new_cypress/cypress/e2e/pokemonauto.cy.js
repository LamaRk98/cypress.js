describe('Покемоны', function () {
   it('автотест на покупку нового фото для своего тренера', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('\\ВВЕДИ СВОЮ ПОЧТУ БЕЗ СЛЕША\\');
        cy.get('#password').type('\\ВВЕДИ СВОЙ ПАРОЛЬ БЕЗ СЛЕША\\');
        cy.get('.auth__button').click();
        cy.wait(5000)
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(\\ЗДЕСЬ ЛЮБОЕ ЧИСЛО ОТ 1 ДО 12 БЕЗ СЛЕША\\) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('DANYA');
        cy.get('.pay-btn').click();
        cy.get('.payment__submit-button').should('be.disabled');
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').should('be.enabled');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
        cy.get('.payment__adv').click();
        cy.get('.header__btn-link').click();
        cy.clearCookies()
    })
})