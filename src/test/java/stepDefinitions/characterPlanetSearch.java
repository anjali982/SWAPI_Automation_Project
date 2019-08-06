package stepDefinitions;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.Matchers.equalTo;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class characterPlanetSearch {
	
	private Response response;
	private RequestSpecification request;
	
	@Before
	public void setUp() {
		RestAssured.baseURI = "https://swapi.co/api";
		RestAssured.basePath = "/people";
	}
	
	@Given("^The endpoint is already configured$")
	public void the_endpoint_is_already_configured() throws Throwable {
		request = RestAssured.given();
	}

@Given("^User creates a Get request to serach a planet character$")
public void user_creates_a_Get_request_to_serach_a_planet_character() throws Throwable {
     response = given().queryParam("search","Luke").when().get();
			
}

@Then("^Status code \"([^\"]*)\" should be returned by the API$")
public void status_code_should_be_returned_by_the_API(String arg1) throws Throwable {
	 System.out.println("Response :" + response.asString());
     System.out.println("Status Code :" + response.getStatusCode());
  
}


}	
	

