@Checkout  @RegressionTest
Feature: Checkout tests 
	As a customer, I want to test the checkout functionalities on PG - Desktop

    Background:
       Given clean IndexDB

       
    @Checkout @Desk @Mobile @Tablet
	Scenario: Validate Frete Grátis
        When I Acess the checkout with personal data filled in
        Then The delivery should be Grátis

    @Checkout  @Desk @Mobile @Tablet
        Scenario: Validade all mandatory alerts are displayed
            And Fill New Pré-email field
            And dont fill any field
            Then mandatory all alert are displayed

   
    @Checkout @Desk @Mobile @Tablet
        Scenario: Modal confirm Your ID when try to edit personal data
            When I Acess the checkout with personal data filled in
            And click to edit my personal data
#           Then The modal of Confirm Your ID appears

    @Checkout @Desk @Mobile @Tablet
	    Scenario: Modal confirm Your ID when try to edit adress
            When I Acess the checkout with personal data filled in
#           And click to edit my address
#           Then The modal of Confirm Your ID appears
    
    @Checkout @Desk @Mobile @Tablet
	    Scenario: Validate the withdrawal button in store
            When I Acess the checkout with personal data filled in
            And click withdrawal button in store
            Then the withdrawal options are visible 
    
    @Checkout @Desk @Mobile @Tablet
	    Scenario: Validate the shipping methods
            When I Acess the checkout with personal data filled in
            Then Validate if the shipping methods are visible
    
    # @Checkout @Desktop 
    #     Scenario: Validade PIX
    #         When I Acess the checkout with personal data filled in
    #         And Select PIX payment 
    #         Then The QR code is visible



  

 
        
   

   
        