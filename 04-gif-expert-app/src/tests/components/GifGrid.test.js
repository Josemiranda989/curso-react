import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => { 
    
    const category = 'One Punch'
    
    test("Debe de mostrarse correctamente", () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
        
    const wrapper = shallow(<GifGrid category={category} />);
      expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de mostrar items cuando se cargar imagenes useFetchGifs', () => {

        const gifs = [
          {
            id: "ABC",
            url: "https://google.com",
            title: "ABC Title",
          },
          {
            id: "123",
            url: "https://google.com",
            title: "ABC Title",
          },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        })
         
        const wrapper = shallow(<GifGrid category={category} />);
         
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false)
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

    });
    

 })