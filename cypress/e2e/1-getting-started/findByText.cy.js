/// <reference types="Cypress" />

    beforeEach(() => {
        cy.visit("https://bstackdemo.com/");
    })

    it("THE DEMO FOR THE FINDBYTEXT()", () => {
     
      //Sorting the Samsung phones using the "Samsung" btn and clicking it.
      cy.findByText("Samsung").should("be.visible").click();

      /*--Commented Out Code Block--
      When this code block run with the above, it will show the error when multiple results are found.
      TO USE THIS CODE, COMMENT OUT THE BELOW CODE BLOCK AND RUN THE CODE*/

    //   cy.findByText("Add to cart").should("be.visible").click();
      
      /*This code block shows how to mitigate the multiple result found issue in a simple way
      TO USE THIS CODE, COMMENT OUT THE ABOVE CODE BLOCK AND RUN THE CODE*/
      cy.findAllByText("Add to cart").then($el => $el[1]).click();
    });
  