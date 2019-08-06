@PlanetList
Feature: API should be able to return a list of all the Star Wars Planets

Scenario:  User should get response for the Star Wars Planets
Given User creates a Get request to get planet list
Then API should return the status code "200"
And API statusline should be "HTTP/1.1 200 OK"
And the Content type should be in "application/json" format


Scenario:  User should get correct response for the Star Wars Planet List
Given User creates a Get request to get planet list
Then API response must be in JSON format
And API response must contain planet count "61"