import { runner } from "./runner";

describe("Runner simple cases", () => {
  it("4+20", () => {
    expect(runner("4+20")).toEqual(24);
  });

  it("4-20", () => {
    expect(runner("4-20")).toEqual(-16);
  });

  it("4*20", () => {
    expect(runner("4*20")).toEqual(80);
  });

  it("4/20", () => {
    expect(runner("4/20")).toEqual(0.2);
  });
});

describe("Runner mixed cases", () => {
  it("1 * 12 * 123", () => {
    expect(runner("1 * 12 * 123")).toEqual(1476);
  });

  it("2 * 23 + 234 - 2345", () => {
    expect(runner("2 * 23 + 234 - 2345")).toEqual(-2065);
  });

  it("20 / 4 + 1 * 5", () => {
    expect(runner("20 / 4 + 1 * 5")).toEqual(10);
  });
});
