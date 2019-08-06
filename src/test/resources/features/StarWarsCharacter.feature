# Feature file to test Star Wars API for specified Character
# Author: Anjali Sharma
# Created: 06/08/2019
Feature: Star Wars API Testing for specified characters	

    # Test case to validate the details of a specified Star Wars Planet.
	@StarCharacter @Regression
    Scenario: Validate the details of a specified Star Wars character
        Given API Base URL for the Application "https://swapi.co/api/"
        And Header as "application/json"
        When Apply get operation with resource as "/people/1"
        Then API should return status code <200>        
		And API status line should be "HTTP/1.1 200 OK"
		And Content type should be in "application/json" format
		And Name of character should be "Luke Skywalker"
		And height of character should be "172"
		And mass of character should be "77"