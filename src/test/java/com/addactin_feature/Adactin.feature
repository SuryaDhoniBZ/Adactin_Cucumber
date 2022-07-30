Feature: Hotel Booking In Adactin Application 

Scenario Outline: User Login In The Web Application 
	Given user Launch The Application 
	When user Enter The "<Username>" In Username Field 
	And user Enter The "<Password>" In Password Field 
	Then user Click The Login Button And It Navigates To Search Hotel Page 
	
	Examples:
	|Username|Password|
	|Surya1234|Surya@1234|
	|Surya5678|Surya@5678|
	|surya1350|MSD@007|
Scenario: User Search The Hotel In Web Application 
	When user Select The Location 
	And user Select The Hotel 
	And user Select The Rooom Type 
	And user Select The Number Of Rooms 
	And user Select The Checkin Date 
	And user Select The Checkout Date 
	And user Select The Number Of Adult Rooms 
	And user Select The Number Of Child Rooms 
	Then user Click The Search Button And It Navigates to Select Hotel Page 
	
Scenario: User Select The Hotel In Web Application 
	When user Select Name Of The Hotel 
	Then user Click The Continue Button And It Navigates To Book Hotel Page 
	
Scenario: User Book The Hotel In Web Application 
	When user Enter The Firstname In Firstname Field 
	And user Enter The Lastname In Lastname Field 
	And user Enter The Address In Address Field 
	And user Select The Creditcard Type 
	And user Enter The Creditcard Number In Creditcard Number Field 
	And user Select The Creditcard Expirey Month 
	And user Select The Creditcard Expirey Year 
	And user Enter The Cvv Number In Cvv Number Field 
	Then user Click The Booknow Button And It Navigates To Logout Page 
	
Scenario: User Logout From The Hotel Web Application 
	Then user Click The Logout Button 
	
