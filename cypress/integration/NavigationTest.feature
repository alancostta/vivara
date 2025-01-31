@NavigationTest @RegressionTest
Feature: Navigation tests
	As a customer, I want to test the navigation functionalities on PG - Desktop

    Background:
		Given clean IndexDB
		And I'm on the product list page
		
	@Navigation @Desk
	Scenario: test application of CEP valid MyLocation
		And I mouseover on the modal region
		And Change validate MyLocation
		# And Region should exist on indexDB
		Then I visualize the region being applied

	@Navigation @Desk @Mobile @Tablet
	Scenario: test application of CEP valid regionalization modal
		And I mouseover on the modal region
		And Change the postal code
		Then I visualize the region being applied
		# And Region should exist on indexDB
		
	@Navigation @Desk @Mobile @Tablet
	Scenario: test application of CEP invalid regionalization modal
		And I mouseover on the modal region
		And Use a invalid postal code
		Then I visualize a a error-Inavalid postal code

	@Navigation  @Desk @Mobile @Tablet
	Scenario: Browse for categories
		Then I verify the categories available on menu

	@Navigation @Desk @Mobile @Tablet
	Scenario: Test the redirection of the Vivara logo from PLP to Home
		Then the Vivara logo has a link to homepage

	@Navigation @Desk @Mobile @Tablet
	Scenario: Test the redirection of the Vivara logo from PDP to Home
		And I'm on the product detail page
		And The page is full loaded
		Then the Vivara logo has a link to homepage

	@Navigation  @Desk @Mobile @Tablet
	Scenario: Test the redirection of the Life Vivara logo from PLP to Home
		Then the Life logo has a link to homepage

	@Navigation  @Desk @Mobile @Tablet
	Scenario: Test the redirection of the Life Vivara logo from PDP to Home
		And I'm on the product detail page
		# When The page is full loaded
		Then the Life logo has a link to homepage

	@Navigation @Desk @Mobile @Tablet
	Scenario: test the regionalization modal
		When I click on the modal
		Then I visualize the regionalization modal
	
	@Navigation  @Desk 
	Scenario: test buy button on card
		And I mouseover on the card
		When I click on buy button 
		Then the minicart is opened
	
	@Navigation @Desk @Mobile @Tablet
    Scenario: Check footer
		Then The footer should being showing 
	
	
	# @Navigation @Desktop
	# Scenario: Test the search bar with non inexistent product
	# 	When I search for a non-existent product
	# 	Then No results should be displayed

	

