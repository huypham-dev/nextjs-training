import { mockCategories } from "constants/mockdata";
import { mocked } from "ts-jest/utils";
import { API } from "utils/api";

jest.mock("utils/api");
const mockGetAllCategories = mocked(API.fetchAllCategories, true);

describe("Api helper", () => {
  test("getAllCategories", async () => {
    window.fetch = jest.fn();
    mockGetAllCategories.mockResolvedValue(mockCategories);
    const res = await API.fetchAllCategories();
    expect(mockGetAllCategories).toBeCalledTimes(1);
    expect(res).toEqual(mockCategories);
  });
});
