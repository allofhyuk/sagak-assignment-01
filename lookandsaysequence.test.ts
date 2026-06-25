import { describe, it, expect } from "vitest";
import { calculateNext, calculateLn, getCenter } from "./lookandsaysequence";

describe("calculateNext - 이전 시퀀스로 현재 시퀀스를 단순 도출", () => {
  it("'1' -> '11'", () => {
    expect(calculateNext("1")).toBe("11");
  });

  it("'11' -> '21'이 된다", () => {
    expect(calculateNext("11")).toBe("21");
  });

  it("'21' -> '1211'이 된다", () => {
    expect(calculateNext("21")).toBe("1211");
  });

  it("'1211' -> '111221'이 된다", () => {
    expect(calculateNext("1211")).toBe("111221");
  });
});

describe("calculateLn - L1부터 순회하여 Ln을 도출", () => {
  it("L1 = 1", () => {
    expect(calculateLn(1)).toBe("1");
  });

  it("L2 = 11", () => {
    expect(calculateLn(2)).toBe("11");
  });

  it("L3 = 21", () => {
    expect(calculateLn(3)).toBe("21");
  });

  it("L4 = 1211", () => {
    expect(calculateLn(4)).toBe("1211");
  });

  it("L5 = 111221", () => {
    expect(calculateLn(5)).toBe("111221");
  });
});

describe("getCenter - Ln의 중앙 두 글자를 출력", () => {
  it("L5('111221')의 가운데 두 자리 수(m) = 12", () => {
    expect(getCenter(5)).toBe("12");
  });

  it("L8('1113213211')의 가운데 두 자리 수(m) = 21", () => {
    expect(getCenter(8)).toBe("21");
  });
});