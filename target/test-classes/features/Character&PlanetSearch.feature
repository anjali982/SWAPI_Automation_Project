@Search
Feature: User should be able to search for the details of a Star Wars character or planet

Background: Endpoint Configuration 
    Given The endpoint is already configured

Scenario:  User should be ale to search details of a character
Given User creates a Get request to serach a planet character 
Then  Status code "200" should be returned by the API