import { getGifs } from "../../helpers/getGifs";

describe("Probando API para obtener Gifs", () => {
  test("Debe de traer 20 elementos", async () => {
    const gifs = await getGifs("Naruto");

    expect(gifs.length).toBe(20);
  });

  test("Debe retornar un arreglo vacío si no se envía una categoría", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
