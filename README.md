# cs-465


  **Architecture**
  
  
**•	Compare and contrast the types of front-end development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).**


•Several distinct forms of front-end code were used in various portions of the application during the whole stack project development. The customer-facing site was built in Express HTML before being converted to an hbs view to improving rendering times by not having to fully load every site component at each refresh. HTML is static and client-facing, which means it cannot connect with backend databases to change information dynamically. JavaScript is a front-end and back-end coding language for adding dynamic components to websites. This was done so that trip data could be retrieved from the MongoDB database and dynamic page modifications could be enabled in response to user input. A single-page application is a website that, unlike an HTML page, does not fully refresh in response to user activity. This is especially useful when interacting with the program itself since it gives the website a local/native application feel.

**•	Why did the backend use a NoSQL MongoDB database?**

•NoSQL MongoDB database was chosen for the backend because of its ease of schema modification based on scalability and feature upgrades, as well as its ability to scale horizontally fast owing to its non-relational nature.

**Functionality**


**•	How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?**

•	JSON is a standardized mechanism for encoding object data in such a way that JavaScript can read it and convert it to a literal JavaScript object. As a result, building an object in the JavaScript language using data is straightforward. This connects frontend and backend development by allowing data and JavaScript objects to be preserved on the backend and used in different contexts based on what the frontend asks for. This means that the data only must be saved once and may then be accessed and used in a variety of ways.

**•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.**

•	The trip card versus trip list components is an example of code that was refactored to increase functionality and efficiency. Having two different components that render the same information is wasteful, but having each trip presented independently as part of the main functionality of the site works better. Reusing UI components is advantageous since it reduces the total size of a program, speeds up the development process, and reduces the possibility of mistakes and vulnerabilities being introduced into the system (assuming the component is secure).


**Testing**


**•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full-stack application.**


•Endpoints may be checked using a variety of approaches before installing security. The first method is to simply browse the API endpoint's localhost web address to see if the page successfully loads the data or what sort of error it creates if there is a problem. However, a tool that tests HTTP requests, such as Postman, is ideal since it can also include security checks and inputs to test endpoints that may be protected from unwanted users.


•The website's strategies are what drive the functioning and dynamism of a webpage. Methods such as GET, POST, PUT, and DELETE are HTTP requests that may be used to obtain or alter the database to create functionality. These are driven on the backend by utilizing database functions (.create,.findOne,.find,.findOneAndUpdate) to adjust the database based on the demands of the client. Endpoints are the methods' outcomes viewed by the administrator or the application's client side. Endpoints should be checked to ensure that they perform effectively and show data correctly or throw errors if a real issue occurs. Security is an extra layer of code used to prevent unauthorized or untrusted individuals from accessing or modifying the database. 


**Reflection**


**•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?**


•Thanks to this course, I've been able to focus on my professional goals and the additional skills I need to build to compete in the job market. The most important skill I feel I gained from this process is a better understanding of how various modules or pieces of code interact and how they may be used to construct a final result.




