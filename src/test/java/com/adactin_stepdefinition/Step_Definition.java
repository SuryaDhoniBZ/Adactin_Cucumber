package com.adactin_stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.properties.File_Reader_Manager;
import com.adactin_Baseclass.Base_class;
import com.adactin_Runner.Runner_Class;
import com.sdp_Addactin.Page_object_manager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition extends Base_class {

	public static WebDriver driver = Runner_Class.driver;
	public static Page_object_manager pom = new Page_object_manager(driver);

	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable {
		String url = File_Reader_Manager.getInstance().getInstanceCR().getUrl();
		driver = Base_class.getUrl(url);

	}

	@When("^user Enter The \"([^\"]*)\" In Username Field$")
	public void user_Enter_The_In_Username_Field(String Username) throws Throwable {
		inputValueElement(pom.getInstanceLp().getUsername(), Username);
	}

	@When("^user Enter The \"([^\"]*)\" In Password Field$")
	public void user_Enter_The_In_Password_Field(String Password) throws Throwable {
		inputValueElement(pom.getInstanceLp().getPassword(), Password);
	}


	@Then("^user Click The Login Button And It Navigates To Search Hotel Page$")
	public void user_Click_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page() throws Throwable {
		clickOnElement(pom.getInstanceLp().getLogin_btn());
	}

	@When("^user Select The Location$")
	public void user_Select_The_Location() throws Throwable {
		dropDown(pom.getInstanceHs().getLocation(), "selectbyvalue", "New York");
	}

	@When("^user Select The Hotel$")
	public void user_Select_The_Hotel() throws Throwable {
		dropDown(pom.getInstanceHs().getHotels(), "selectbyvalue", "Hotel Creek");
	}

	@When("^user Select The Rooom Type$")
	public void user_Select_The_Rooom_Type() throws Throwable {
		dropDown(pom.getInstanceHs().getRoom_Type(), "selectbyvalue", "Double");
	}

	@When("^user Select The Number Of Rooms$")
	public void user_Select_The_Number_Of_Rooms() throws Throwable {
		dropDown(pom.getInstanceHs().getNo_ofRooms(), "selectbyvalue", "3");
	}

	@When("^user Select The Checkin Date$")
	public void user_Select_The_Checkin_Date() throws Throwable {
		inputValueElement(pom.getInstanceHs().getCheckIn(), "26/07/2022");
	}

	@When("^user Select The Checkout Date$")
	public void user_Select_The_Checkout_Date() throws Throwable {
		inputValueElement(pom.getInstanceHs().getCheckOut(), "30/07/2022");
	}

	@When("^user Select The Number Of Adult Rooms$")
	public void user_Select_The_Number_Of_Adult_Rooms() throws Throwable {
		dropDown(pom.getInstanceHs().getAdultRoom(), "selectbyvalue", "2");
	}

	@When("^user Select The Number Of Child Rooms$")
	public void user_Select_The_Number_Of_Child_Rooms() throws Throwable {
		dropDown(pom.getInstanceHs().getChildRoom(), "selectbyvalue", "1");
	}

	@Then("^user Click The Search Button And It Navigates to Select Hotel Page$")
	public void user_Click_The_Search_Button_And_It_Navigates_to_Select_Hotel_Page() throws Throwable {
		clickOnElement(pom.getInstanceHs().getSearch());
	}

	@When("^user Select Name Of The Hotel$")
	public void user_Select_Name_Of_The_Hotel() throws Throwable {
		clickOnElement(pom.getInstanceSh().getRadioButton());
	}

	@Then("^user Click The Continue Button And It Navigates To Book Hotel Page$")
	public void user_Click_The_Continue_Button_And_It_Navigates_To_Book_Hotel_Page() throws Throwable {
		clickOnElement(pom.getInstanceSh().getContinueBtn());
	}

	@When("^user Enter The Firstname In Firstname Field$")
	public void user_Enter_The_Firstname_In_Firstname_Field() throws Throwable {
		inputValueElement(pom.getInstanceBh().getFirstname(), "Surya");
	}

	@When("^user Enter The Lastname In Lastname Field$")
	public void user_Enter_The_Lastname_In_Lastname_Field() throws Throwable {
		inputValueElement(pom.getInstanceBh().getLastname(), "Dhoni");
	}

	@When("^user Enter The Address In Address Field$")
	public void user_Enter_The_Address_In_Address_Field() throws Throwable {
		inputValueElement(pom.getInstanceBh().getAddress(), "no.4478,6th avenue,Manhatten,NY");
	}

	@When("^user Select The Creditcard Type$")
	public void user_Select_The_Creditcard_Type() throws Throwable {
		dropDown(pom.getInstanceBh().getCreditCard(), "selectbyvalue", "AMEX");
	}

	@When("^user Enter The Creditcard Number In Creditcard Number Field$")
	public void user_Enter_The_Creditcard_Number_In_Creditcard_Number_Field() throws Throwable {
		inputValueElement(pom.getInstanceBh().getCreditCardNumber(), "1234567891234567");
	}

	@When("^user Select The Creditcard Expirey Month$")
	public void user_Select_The_Creditcard_Expirey_Month() throws Throwable {
		dropDown(pom.getInstanceBh().getExpMonth(), "selectbyvalue", "8");
	}

	@When("^user Select The Creditcard Expirey Year$")
	public void user_Select_The_Creditcard_Expirey_Year() throws Throwable {
		dropDown(pom.getInstanceBh().getExpYear(), "selectbyvisibletext", "2022");
	}

	@When("^user Enter The Cvv Number In Cvv Number Field$")
	public void user_Enter_The_Cvv_Number_In_Cvv_Number_Field() throws Throwable {
		inputValueElement(pom.getInstanceBh().getCvvNumber(), "123");
	}

	@Then("^user Click The Booknow Button And It Navigates To Logout Page$")
	public void user_Click_The_Booknow_Button_And_It_Navigates_To_Logout_Page() throws Throwable {
		clickOnElement(pom.getInstanceBh().getBookNow());
	}

	@Then("^user Click The Logout Button$")
	public void user_Click_The_Logout_Button() throws Throwable {
		waits("implicit", pom.getInstanceLg().getLogout());
		clickOnElement(pom.getInstanceLg().getLogout());
	}

}
