import APIManager from "../src/services/api.js";

describe("API manager", function () {
  describe("getAllProjects function", function () {
    it("should get all the projects", async function () {
      await expectAsync(APIManager.getAllProjects()).toBeResolved();
    });
  });

  describe("getCountries function", function () {
    it("should get all the countries", async function () {
      await expectAsync(APIManager.getCountries()).toBeResolved();
    });
  });

  describe("getRegions function", function () {
    it("should get all the regions", async function () {
      await expectAsync(APIManager.getRegions()).toBeResolved();
    });
  });

  describe("getFilteredProjects function", function () {
    it("should get filtered projects", async function () {
      await expectAsync(APIManager.getFilteredProjects(1)).toBeResolved();
    });
  });

  describe("getCountryWithID function", function () {
    it("should get the right country", async function () {
      await expectAsync(APIManager.getCountryWithID(1)).toBeResolved();
    });
  });
});
