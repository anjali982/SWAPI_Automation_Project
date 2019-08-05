package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;



import static io.restassured.RestAssured.given;


public class CharacterList {
	  private RequestSpecification request;
	  private Response response;
	  private ValidatableResponse json;
	  
	@Given("^I create Get request to get character list$")
	public void i_create_Get_request_to_get_character_list() throws Throwable {
	 
		response= given().get("https://swapi.co/api/people/");
			  
	}

	//@Then("^I get list of all star wars characters$")
	//public void i_get_list_of_all_star_wars_characters() throws Throwable {
	   
		
	  //  throw new PendingException();
	//}

	@Then("^I get status code (\\d+) from the database$")
	public void i_get_status_code_from_the_database(int arg1) throws Throwable {
		json = response.then().statusCode(200);
		
	   
	}


}
