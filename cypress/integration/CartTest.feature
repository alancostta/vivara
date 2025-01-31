@CartTest @Desktop @RegressionTest
Feature: Cart tests 
    As a customer, I want to test the cart functionalities on PG - Desktop

    Background:
        Given At Desktop
        And clean IndexDB

     @Cart @Desk @Mobile @Tablet
    Scenario: remove product from the cart
		And I'm on the product detail page 
		And clean IndexDB
		And The page is full loaded
        And I click on add cart button
		And Add an other product
        When I click on Ir para a sacola button 
        And remove a product
        Then I validate if have just 1 product  

    @Cart @Desk @Mobile @Tablet
    Scenario: Increase item to cart
        When Im on cart page 2
        # And I reduce the amount from cart
        And  click on plus symbol
        Then should have 2 quantity of the same product in the cart 
    

    @Cart @Desk @Mobile @Tablet
    Scenario: reduce amount of itens from the cart
        When Im on cart page 2
        And I reduce the amount from cart
        Then I validate if have just 1 quantity of this product

    @Cart @Desk @Mobile @Tablet
    Scenario: Clear all cart
        And visit PDP
        And I click on add cart button
        And I click on Ir para a sacola button
        When I remove all items from cart
        Then I validate if is clean cart

    @Cart @Desk @Mobile @Tablet
    Scenario: Add two items to cart
        When Im on cart page 2
        Then I validate if the two items are in cart
      
   

    @Cart @Desk @Mobile @Tablet
    Scenario: Validate select for gift
        When Im on cart page 2
        And Click to select for gift
        Then validate if the gift is selected

    @Cart @Desk @Mobile @Tablet
    Scenario: Validate select Seller code
        When Im on cart page 2
        And add a Seller coupon
        Then validate if the Seller code is active

    @Cart @Desk @Mobile @Tablet
    Scenario: Validate discount cupon
        When Im on cart page 2
        And add a Discount coupon
        Then validate if the Coupon code is active

# Cenário removido dia 18/01 após implemntação da task VVR-4261, onde foi feita a remoção de Nossas Certificações    
    # @Cart @Desktop 
    # Scenario: Validate Nossas Certificações 
    #     When Go to the cart 
    #     And Click on Nossas Certificações
    #     Then Should go to Nossas Certificações 


    


