$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"\u003cUsername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cPassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 10,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;1"
    },
    {
      "cells": [
        "Surya1234",
        "Surya@1234"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;2"
    },
    {
      "cells": [
        "Surya5678",
        "Surya@5678"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;3"
    },
    {
      "cells": [
        "surya1350",
        "MSD@007"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"Surya1234\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"Surya@1234\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 6725021961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surya1234",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 181429369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surya@1234",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 122792930,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 397521018,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"Surya5678\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"Surya@5678\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 282240503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surya5678",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 108120689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Surya@5678",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 110419151,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 410967050,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"surya1350\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"MSD@007\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 258232533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "surya1350",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 104799480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MSD@007",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 94715107,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 745676120,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User Search The Hotel In Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-the-hotel-in-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Select The Rooom Type",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Select The Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select The Checkin Date",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select The Checkout Date",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select The Number Of Adult Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Select The Number Of Child Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Click The Search Button And It Navigates to Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Location()"
});
formatter.result({
  "duration": 279640167,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 138119632,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Rooom_Type()"
});
formatter.result({
  "duration": 145045206,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Number_Of_Rooms()"
});
formatter.result({
  "duration": 133520898,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Checkin_Date()"
});
formatter.result({
  "duration": 95947957,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Checkout_Date()"
});
formatter.result({
  "duration": 115407302,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Number_Of_Adult_Rooms()"
});
formatter.result({
  "duration": 139160491,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Number_Of_Child_Rooms()"
});
formatter.result({
  "duration": 133715907,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Search_Button_And_It_Navigates_to_Select_Hotel_Page()"
});
formatter.result({
  "duration": 553264607,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User Select The Hotel In Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-select-the-hotel-in-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user Select Name Of The Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user Click The Continue Button And It Navigates To Book Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_Name_Of_The_Hotel()"
});
formatter.result({
  "duration": 119317163,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Continue_Button_And_It_Navigates_To_Book_Hotel_Page()"
});
formatter.result({
  "duration": 630662460,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User Book The Hotel In Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-book-the-hotel-in-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "user Enter The Firstname In Firstname Field",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Enter The Lastname In Lastname Field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Enter The Address In Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Select The Creditcard Type",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Enter The Creditcard Number In Creditcard Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Select The Creditcard Expirey Month",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Select The Creditcard Expirey Year",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Enter The Cvv Number In Cvv Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Click The Booknow Button And It Navigates To Logout Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Firstname_In_Firstname_Field()"
});
formatter.result({
  "duration": 138514483,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Lastname_In_Lastname_Field()"
});
formatter.result({
  "duration": 149038987,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Address_In_Address_Field()"
});
formatter.result({
  "duration": 136179796,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Creditcard_Type()"
});
formatter.result({
  "duration": 140608274,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Creditcard_Number_In_Creditcard_Number_Field()"
});
formatter.result({
  "duration": 127755724,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Creditcard_Expirey_Month()"
});
formatter.result({
  "duration": 135140748,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Creditcard_Expirey_Year()"
});
formatter.result({
  "duration": 127175525,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Cvv_Number_In_Cvv_Number_Field()"
});
formatter.result({
  "duration": 108555989,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Booknow_Button_And_It_Navigates_To_Logout_Page()"
});
formatter.result({
  "duration": 99307201,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "User Logout From The Hotel Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-logout-from-the-hotel-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "user Click The Logout Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Logout_Button()"
});
formatter.result({
  "duration": 5780432584,
  "status": "passed"
});
});