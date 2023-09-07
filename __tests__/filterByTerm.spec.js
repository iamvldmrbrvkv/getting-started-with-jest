import filterByTerm from "../src/filterByTerm";

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

    expect(filterByTerm(input, "LINK")).toEqual(output);
  });

  test("it should filter by a search term (uRl)", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" }
    ];

    expect(filterByTerm(input, "uRL")).toEqual(output);
  });

  test("it should throw when searchTerm is empty string", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    function errorExpect() {
      filterByTerm(input, "");
    }

    const output = Error("searchTerm cannot be empty");

    expect(errorExpect).toThrow(output);
  });

  test("it should throw when inputArr is empty", () => {
    const input = [];

    function errorExpect() {
      filterByTerm(input, 'link');
    }

    const output = Error("inputArr cannot be empty");

    expect(errorExpect).toThrow(output);
  });
});