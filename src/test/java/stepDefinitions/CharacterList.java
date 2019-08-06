package stepDefinitions;

import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import java.util.List;

import org.testng.Assert;

import com.github.fge.jsonschema.SchemaVersion;
import com.github.fge.jsonschema.cfg.ValidationConfiguration;
import com.github.fge.jsonschema.main.JsonSchemaFactory;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;


public class CharacterList {
	private Response response;
	private RequestSpecification request;
	private String baseURL = "https://swapi.co/api/people";
	
	
	@Given("^User creates a Get request to get character list$")
	public void user_creates_a_Get_request_to_get_character_list() throws Throwable {
	
		request= given().param("/people");
		response = request.when().get(baseURL);
		
	}
	@Then("^API should return status code \"([^\"]*)\"$")
	public void api_should_return_status_code(int statusCode) throws Throwable {
		response.then().statusCode(statusCode);
	}

	@Then("^API status line should be \"([^\"]*)\"$")
	public void api_status_line_should_be(String statusLine) throws Throwable {
		response.then().statusLine(statusLine);

	}

	@Then("^Content type should be in \"([^\"]*)\" format$")
	public void content_type_should_be_in_format(String format) throws Throwable {
	   response.then().contentType(format);
	}

	@Then("^API response should be in JSON format$")
	public void api_response_should_be_in_json_format() throws Throwable {
		response.then().assertThat().body(matchesJsonSchemaInClasspath("example_1.json"));
	
	}
	
	@Then("^API response should contain character count \\\"([^\\\"]*)\\\"$")
	public void api_response_should_contain_character_count(int count) throws Throwable {
	response.then().assertThat().body("count", equalTo(count));
		/*request= given().param("/people");
		response = request.when().get(baseURL);
		ResponseBody body = response.getBody();
		String bodyStringValue = body.asString();
		System.out
		Assert.assertTrue(bodyStringValue.contains("firstName"));*/
	  	
		 
	}
	}
	
	
