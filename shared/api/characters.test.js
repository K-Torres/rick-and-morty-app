let axios = require ("axios");
let MockAdapter = require ("axios-mock-adapter");
let { CHARACTERS_URL, getAllCharacter } = require ("./characters");

describe("fetchAllCharacters", () => {

  let mock;
  
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("when API call is successful", () => {
    it("should return characters list", async () => {
      const charactersList = require("../mocks/charactersList.json");
      mock.onGet(CHARACTERS_URL).reply(200, charactersList);

      await getAllCharacter().then((response) => {
        expect(response.data).toEqual(charactersList);
      });
    });
  });

  describe("when API call fails", () => {
    it("should return empty characters list", async () => {
      mock.onGet(CHARACTERS_URL).networkErrorOnce();

      await getAllCharacter().then(response => {
        expect(response).toEqual([]);
      });
    });
  });
});