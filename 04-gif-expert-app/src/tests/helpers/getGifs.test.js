import { getGifs } from "../../helpers/getGifs"

describe('pruebas con getGifs Fetch', () => { 
    test('debe de traer 10 elementos', async () => {
        const gifs = await getGifs('Pokemon')
        
        expect(gifs.length).toBe(10);
    })
 })