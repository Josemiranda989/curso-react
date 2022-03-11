import { getImagen } from "../../base/11-async-await";

describe("pruebas con async-await y fetch", () => {
  test("debe de retornar el url de la imagen", async () => {
    const url = await getImagen();
    console.log(url);
    //   expect(typeof url).toBe("string");
    expect(url.includes("http")).toBe(true);
  });
});
