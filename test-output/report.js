$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CharacterList.feature");
formatter.feature({
  "line": 1,
  "name": "Character list for all Star Wars characters",
  "description": "",
  "id": "character-list-for-all-star-wars-characters",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Get character list for all Star Wars Characters",
  "description": "",
  "id": "character-list-for-all-star-wars-characters;get-character-list-for-all-star-wars-characters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I create Get request to get character list",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#Then I get list of all star wars characters"
    }
  ],
  "line": 6,
  "name": "I get status code 200 from the database",
  "keyword": "And "
});
formatter.match({
  "location": "CharacterList.i_create_Get_request_to_get_character_list()"
});
formatter.result({
  "duration": 2663465300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "CharacterList.i_get_status_code_from_the_database(int)"
});
formatter.result({
  "duration": 46194900,
  "status": "passed"
});
});