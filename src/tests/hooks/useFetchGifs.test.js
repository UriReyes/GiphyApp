import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";
describe("Tests in the hook", () => {
  test("should return the initial state", async () => {
    //const { data, loading } = useFetchGifs("Naruto");
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Naruto")
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("should return a list of images and the loading should be false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Naruto")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toEqual(20);
    expect(loading).toBeFalsy();
  });
});
