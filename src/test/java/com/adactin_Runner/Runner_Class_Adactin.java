package com.adactin_Runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.properties.File_Reader_Manager;
import com.adactin_Baseclass.Base_class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\addactin_feature", 
glue = "com.adactin_stepdefinition", 
monochrome = true, 
strict = true,
plugin = {"html:Report/cucumber_html_report", 
		"pretty", 
		"json:Report/json_report.json",
		"com.cucumber.listener.ExtentCucumberFormatter:Report/extend_report.html"})

public class Runner_Class_Adactin {
	public static WebDriver driver;

	@BeforeClass
	public static void setUp() throws IOException {
		
		String browser = File_Reader_Manager.getInstance().getInstanceCR().getBrowser();
		
		driver = Base_class.getBrowser(browser);
	}

	@AfterClass
	public static void tearDown() {
		driver = Base_class.close();
	}

}
