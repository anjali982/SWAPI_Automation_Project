// Test Runner file
// Author: Anjali Sharma
// Created: 05/08/2019
package runner;
import java.io.File;
import org.testng.annotations.AfterClass;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(
		//feature files locations  -- modify tag list to run specific test cases
		features="C:\\Users\\16479\\eclipse-workspace\\SWAPI_Automation_Project\\src\\test\\resources\\features\\", tags="@StarPlanet,@StarCharacter,@Regression"
		//stepdefinition folder
		,glue= {"stepDefinitions"},
		// Plugin for extent reports
	     plugin = {"com.cucumber.listener.ExtentCucumberFormatter:test-output/test-reports/SWAPI_Automation_Results.html"} 
		)

public class TestRunner  extends AbstractTestNGCucumberTests{

	 @AfterClass
	    public static void writeExtentReport() {
	      
	        Reporter.loadXMLConfig(new File("C:\\Users\\16479\\eclipse-workspace\\SWAPI_Automation_Project\\src\\test\\resources\\config\\extent-config.xml"));
	    
	    }
	}
