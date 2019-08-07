# Feature file to test Star Wars API for list of planet
# Author: Anjali Sharma
# Created: 06/08/2019
Feature: Star Wars API Testing for list of planets

	# Test Case to Validate the response for the Star Wars Planets
	@StarPlanet @Regression 
	Scenario: Validate the response for the Star Wars Planets
		Given API Base URL for the Application "https://swapi.co/api/" 
		And Header as "application/json" 
		When Apply get operation with resource as "/planets" 
		Then API should return status code <200> 
		And API status line should be "HTTP/1.1 200 OK" 
		And Content type should be in "application/json" format 
	
	# Test Case to Validate the response list for the Star Wars Planets	
	@StarPlanet @Regression 
	Scenario: Validate the response list for the Star Wars Planets 
		Given API Base URL for the Application "https://swapi.co/api/" 
		And Header as "application/json" 
		When Apply get operation with resource as "/planets"
		Then Result tag count <10>        
		And Total count should be <61> 
		
