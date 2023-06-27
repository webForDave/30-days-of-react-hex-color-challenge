import { useState } from 'react';

const HexColor = () => {

    let [colors, setColors] = useState([
        {code: '#4e417e', id: 1},
        {code: '#02dc92', id: 2},
        {code: '#dfbaa0', id: 3},
        {code: '#d8394e', id: 4},
        {code: '#7c31d3', id: 5},
        {code: '#7fcfd2', id: 6},
        {code: '#0e5d46', id: 7},
        {code: '#d98590', id: 8},
        {code: '#7923d7', id: 9},
        {code: '#6e5eeb', id: 10},
        {code: '#2a176b', id: 11},
        {code: '#dea1d8', id: 12},
        {code: '#cbae6f', id: 13},
        {code: '#b6841d', id: 14},
        {code: '#62df7d', id: 15},
        {code: '#9e4d2c', id: 16},
        {code: '#393b73', id: 17},
        {code: '#1a4f07', id: 18},
        {code: '#045529', id: 19},
        {code: '#04e754', id: 20},
        {code: '#697980', id: 21},
        {code: '#5bdcc7', id: 22},
        {code: '#7010bc', id: 23},
        {code: '#c50007', id: 24},
        {code: '#298b5d', id: 24},
    ]);

    return ( 
        <main className="body-content">
            <h1 className="page-heading">30 days of React</h1>
            <h3 className="project-title">Hexadecimal Colors</h3>

            <div className="colors-div" >
                {colors.map(color => (
                    <div className="sm" key = {color.id} style={{width: '200px', height: '100px', backgroundColor: color.code}} >
                        <p>{ color.code }</p>
                    </div>
                ))}
            </div>

        </main>
     );
}
 
export default HexColor;