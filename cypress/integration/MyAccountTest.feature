@MyAccountTest @RegressionTest
Feature: My Account tests 
	As a customer, I want to test the My Account functionalities on PG - Desktop
     

	@MyAccount @Desk @Mobile @Tablet
	Scenario: check my orders
		And clean IndexDB
		And I'm on the login page
        And I do login using correct email and password
		And I Access my orders page
		Then I check that I am in the correct page
	
	
	@MyAccount @Desk @Mobile @Tablet
	Scenario: check my Wishlist
		Given I Access my Wishlist
		Then I check that I am in Wishlist page

	
	@MyAccount  @Desk @Mobile @Tablet
	Scenario: Edit personal data - Female Gender 
		Given I Access the profile page
		When I edit my personal data - Female Gender 
		Then I check if the personal data was edited correctly - Female Gender

	@MyAccount @Desk @Mobile @Tablet
	Scenario: Edit personal data - Male Gender 
		# Given I'm on the login page
        # And I do login using correct email and password
		And I Access the profile page
		When I edit my personal data - Male Gender
		Then I check if the personal data was edited correctly - Male Gender

	
