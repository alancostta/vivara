@CategoryTest @Desktop @RegressionTest
Feature: Category tests 
	As a customer, I want to test the category functionalities on PG - Desktop

	Background:
        Given At Desktop
		When I'm on the product list page


	@Category  @Desk @Mobile @Tablet
	Scenario: Validate ordenation by Mais Vendidos
		When I select to Order by Mais vendidos 
		Then I validate the page ordenation by Mais Vendidos

	@Category @Desk @Mobile @Tablet
	Scenario: Validate pagination
		And click on Carregar mais produtos
		Then More products should appears



	@Category @Desk @Mobile @Tablet
		Scenario: Validate filter
		And select some filter
		Then validate if filter works

	@Category @Desk @Mobile @Tablet
		Scenario: Validate clear filter
		And select some filter
		And clear filter
		Then validate if have any filter select
	
	@Category @Desk @Mobile @Tablet
	Scenario: Validate ordenation by Descontos
		When I select to Order by Descontos
		Then I validate the page ordenation by Descontos

	
	
