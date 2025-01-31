@PdpTest  @RegressionTest
Feature: Product Detail Page tests 
	As a customer, I want to test the product detail page functionalities on PG - Desktop

    Background:
		Given I'm on the product detail page 
		And clean IndexDB
		When The page is full loaded
	
	@Pdp @Desk @Mobile @Tablet
	Scenario: Validate the region in PDP 
	And On the product page calculate valid shipping
	And On the product page calculate valid shipping
	And The shipping table should be displayed	
	Then I visualize the region being applied
	
	@Pdp @Desk @Mobile @Tablet
	Scenario: validate plus product on minicart 
		And I click on add cart button
		And I click on + symbol at minicart
		Then I validate if are 2 same products at minicart

	@Pdp @Desk @Mobile @Tablet
	Scenario: validate minus product on minicart 
		And I click on add cart button
		And I click on + symbol at minicart 
		And I click on - symbol at minicart
		Then I validate if are 1 same products at minicart

	@Pdp @Desk @Mobile @Tablet
    Scenario: Check 2 different products on minicart 
		And I click on add cart button
		And Add an other product
        Then I validate if are 2 different products at minicart 

	@Pdp @Desk @Mobile @Tablet
		Scenario: Check remove button at minicart
		And I click on add cart button
		When I click on remove button
		Then The product should not be on the minicart anymore	

	@Pdp @Desk @Mobile  @Tablet
		Scenario: Check if subtotal is showing 
		And I click on add cart button
		And Close cookies info
		Then Validate if the subtotal is showing
	
	

	@Pdp @Desk @Mobile @Tablet
    Scenario: Validadte if the minicart is empty 
		And Open minicart
		Then The minicart is empty 

 
	@Pdp @Desk @Mobile @Tablet
		Scenario: Validate if goes to checkout through minicart 
		And I click on add cart button
		And I click on Ir para a sacola button	
		Then Im on carts page

	@Pdp @Desk @Mobile @Tablet
	Scenario: Calculate valid shipping in the product page
		And On the product page calculate valid shipping
		Then The shipping table should be displayed

	@Pdp @Desk @Mobile @Tablet
	Scenario: At Desktop Calculate invalid shipping in the product page
		And On the product page calculate invalid shipping
		Then The shipping error will be displayed


	@Pdp @Desk @Mobile @Tablet
	Scenario: At Desktop validate price block 
		Then the product value is visible

	

	# @Pdp @Desktop 
    # Scenario: Check + button 
    #     And I click on + symbol 
    #     Then I validate if are 2 products to add in the cart

	

	

	
	


	





