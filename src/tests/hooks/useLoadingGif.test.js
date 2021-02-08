import { renderHook } from "@testing-library/react-hooks";
import { useLoadingGif } from "../../hooks/useLoadingGif";

describe("Tests fot customHook useLoadingGif", () => {
  test("should return initial state", () => {
    const url = "https://localhost/image.png";
    const { result } = renderHook(() => useLoadingGif(url));
    const { event, data } = result.current;
    const { gif, loaded } = data;

    expect(event).toEqual(expect.any(Function));
    expect(gif).toBe("");
    expect(loaded).toBeFalsy();
  });
});
