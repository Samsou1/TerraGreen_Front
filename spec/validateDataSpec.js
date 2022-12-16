// import { validateInput } from "../src/services/validateInput";
// import { validateEmail } from "../src/services/validateUserData";
// import { validateDataSearch } from "../src/services/validateDataSearch";

import { validateComment } from "../src/services/validateDataComment";
import { validatePassword } from "../src/services/validateUserData";
// console.log(validateComment('test'))
describe('Type of data', function() {

  describe('comment', function() {
    const validComment1 = "This is a test";
    const validComment2 = "... yet another test";
    const invalidComment1 = "T";
    const invalidComment2 = "<><!@";
    const invalidComment3 = "This is a new test<";

    it('should validate the right comments', function() {
      expect(validateComment(validComment1)).toBeTrue;
      expect(validateComment(validComment2)).toBeTrue;
    });
  
    it("shouldn't validate wrong comment", function() {
      expect(validateComment(invalidComment1)).toBeFalse;
      expect(validateComment(invalidComment2)).toBeFalse;
      expect(validateComment(invalidComment3)).toBeFalse;
    });
  });

  describe('password', function() {
    const validPassword1 = "q156qz!pwT";
    const validPassword2 = "YetAnotherPwd0";
    const invalidPassword1 = "Short1";
    const invalidPassword2 = "onlylowercases";
    const invalidPassword3 = "ONLYUPPERCASES";
    const invalidPassword4 = "041181811";

    it('should validate the right password', function() {
      expect(validatePassword(validPassword1)).toBeTrue;
      expect(validatePassword(validPassword2)).toBeTrue;
    });
  
    it("shouldn't validate wrong password", function() {
      expect(validatePassword(invalidPassword1)).toBeFalse;
      expect(validatePassword(invalidPassword2)).toBeFalse;
      expect(validatePassword(invalidPassword3)).toBeFalse;
      expect(validatePassword(invalidPassword4)).toBeFalse;
    });
  });


});
