import axios from "axios";
import { expect } from "chai";

describe("API REQUEST LOGIN INVALID DATA", () => {
  it("API should return 401 status", async () => {
    const response = await axios
      .post("https://server-stage.pasv.us/user/login", {
        email: "admin@gmail.com",
        password: "admin"
      })
      .then(res => res)
      .catch(err => err);
    expect(response.response.status, "Status not eq 401").eq(401);
    expect(response.response.statusText, "StatusText not correct").eq(
      "Unauthorized"
    );
    expect(response.response.data.message, "Not correct Msg").eq("Auth failed");
  });

  it("API walmart sign in with invalid data", async () => {
    const response = await axios
      .post(
        "https://www.walmart.com/account/electrode/api/signin?tid=0&returnUrl=%2F",
        {
          username: "admin@gmail.com",
          password: "admin",
          rememberme: true,
          showRememberme: "true"
        }
      )
      .then(result => result)
      .catch(error => error);
      expect(response.response.status, "Walmart status not eq 401").eq(412);
      expect(response.response.statusText, "Walmart statusText not correct").eq('Precondition Failed');
      expect(response.response.config.data, 'Not correct userName')
          .eq('{"username":"admin@gmail.com","password":"admin","rememberme":true,"showRememberme":"true"}');
  });
});
