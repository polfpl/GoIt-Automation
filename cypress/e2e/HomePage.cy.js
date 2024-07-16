import { Login } from "../pages/login";

const loginPage = new Login();

describe("Page login object example", () => {
        
    beforeEach("Go to page", () => {
        loginPage.visit();
      });
    
    it("login page test", () => {
        // login
     loginPage.login();
        // logout
     loginPage.logout();
  });
});