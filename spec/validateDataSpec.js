import { validateInput } from "../src/services/validateInput.js";
import { validateEmail } from "../src/services/validateUserData.js";
import { validateDataSearch } from "../src/services/validateDataSearch.js";
import { validatePassword } from "../src/services/validateUserData.js";
import { validateComment } from "../src/services/validateDataComment.js";

describe("Type of data", function () {
  describe("comment", function () {
    const validComment1 = "This is a test";
    const validComment2 = "... yet another test";
    const invalidComment1 = "T";
    const invalidComment2 = "<><!@";
    const invalidComment3 = "This is a new test<";

    it("should validate the right comments", function () {
      expect(validateComment(validComment1)).toBeTruthy();
      expect(validateComment(validComment2)).toBeTruthy();
    });

    it("shouldn't validate wrong comment", function () {
      expect(validateComment(invalidComment1)).toBeFalsy();
      expect(validateComment(invalidComment2)).toBeFalsy();
      expect(validateComment(invalidComment3)).toBeFalsy();
    });
  });

  describe("password", function () {
    const validPassword1 = "q156qz!pwT";
    const validPassword2 = "YetAnotherPwd0";
    const invalidPassword1 = "Sh0rt";
    const invalidPassword2 = "onlylowercases";
    const invalidPassword3 = "ONLYUPPERCASES";
    const invalidPassword4 = "041181811";

    it("should validate the right password with length > 6", function () {
      expect(validatePassword(validPassword1)).toBeTruthy();
      expect(validatePassword(validPassword2)).toBeTruthy();
    });

    it("shouldn't validate password without at least a lowercase, uppercase and digit", function () {
      expect(validatePassword(invalidPassword1)).toBeFalsy();
      expect(validatePassword(invalidPassword2)).toBeFalsy();
      expect(validatePassword(invalidPassword3)).toBeFalsy();
      expect(validatePassword(invalidPassword4)).toBeFalsy();
    });
  });

  describe("search", function () {
    const validSearch1 = "London";
    const validSearch2 = "Bourgogne";
    const invalidSearch1 = "Boug<ogne";
    const invalidSearch2 = "!!!!!!";
    const invalidSearch3 = "Lond/on";
    const invalidSearch4 = "London@";

    it("should validate location inputs", function () {
      expect(validateDataSearch(validSearch1)).toBeTruthy();
      expect(validateDataSearch(validSearch2)).toBeTruthy();
    });

    it("shouldn't validate input with special characters", function () {
      expect(validateDataSearch(invalidSearch1)).toBeFalsy();
      expect(validateDataSearch(invalidSearch2)).toBeFalsy();
      expect(validateDataSearch(invalidSearch3)).toBeFalsy();
      expect(validateDataSearch(invalidSearch4)).toBeFalsy();
    });
  });

  describe("email", function () {
    const validEmail1 = "test@example.com";
    const validEmail2 = "first_name.last_name@domain.net";
    const invalidEmail1 = "emailwithoutat.domain.com";
    const invalidEmail2 = "first_name.last_name@domain";
    const invalidEmail3 = "<<.lastname@domain.com";
    const invalidEmail4 = "firstname@.com";

    it("should validate standard emails", function () {
      expect(validateEmail(validEmail1)).toBeTruthy();
      expect(validateEmail(validEmail2)).toBeTruthy();
    });

    it("shouldn't validate emails that violate email standards", function () {
      expect(validateEmail(invalidEmail1)).toBeFalsy();
      expect(validateEmail(invalidEmail2)).toBeFalsy();
      expect(validateEmail(invalidEmail3)).toBeFalsy();
      expect(validateEmail(invalidEmail4)).toBeFalsy();
    });
  });

  describe("validateInput", function () {
    const validInput1 = "";
    const validInput2 = "Generic Input";
    const invalidInput1 = "Gen<ric Input";
    const invalidInput2 = "/";
    const invalidInput3 = "<button></button>";
    const invalidInput4 = "/projects/1";

    it("should validate inputs without special characters", function () {
      expect(validateInput(validInput1)).toBeTruthy();
      expect(validateInput(validInput2)).toBeTruthy();
    });

    it("shouldn't validate input with special characters", function () {
      expect(validateInput(invalidInput1)).toBeFalsy();
      expect(validateInput(invalidInput2)).toBeFalsy();
      expect(validateInput(invalidInput3)).toBeFalsy();
      expect(validateInput(invalidInput4)).toBeFalsy();
    });
  });
});
