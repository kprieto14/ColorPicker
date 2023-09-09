import React, { ChangeEvent, useState } from "react";

export function ColorMain() {
    const [hueValue, setHueValue] = useState(Math.floor(Math.random() * 360))
    const [saturationValue, setSaturationValue] = useState(100)
    const [lightValue, setLightValue] = useState(Math.floor(Math.random() * 50) + 35)

    function handleSlider( event: ChangeEvent<HTMLInputElement> ) {
       if( event.target.classList.contains("hue") ) {
            setHueValue(event.target.valueAsNumber)
        }
       else if( event.target.classList.contains("saturation") ) {
            setSaturationValue(event.target.valueAsNumber)
        }
        else if( event.target.classList.contains("light") ) {
            setLightValue(event.target.valueAsNumber)
        }
    }

    const newBackgroundColor = { "--change-color": `hsl(${hueValue},${saturationValue}%, ${lightValue}%` } as React.CSSProperties;

    return (
        <div style={newBackgroundColor}>
            <header>
                <h1>HSL Color Picker</h1>
                <h2>
                    Made with 🫶🏽 in Florida by Kristy Prieto
                </h2>
            </header>

            <main>
                <aside id="color-box">
                </aside>

                <section>
                    <article>
                        <label htmlFor="hue">H</label>
                        <input type="range" className="hue" min="0" max="360" value={hueValue} onChange={handleSlider}/>
                        <input type="text" className="textbox" value={hueValue}/>
                    </article>

                    <article>
                        <label htmlFor="saturation">S</label>
                        <input type="range" className="saturation" min="0" max="100" value={saturationValue} onChange={handleSlider}/>
                        <input type="text" className="textbox" value={saturationValue}/>
                    </article>

                    <article>
                        <label htmlFor="light">L</label>
                        <input type="range" className="light" min="0" max="100" value={lightValue} onChange={handleSlider}/>
                        <input type="text" className="textbox" value={lightValue}/>
                    </article>
                </section>

                <footer>
                    <input type="text" id='hexcode'/>
                    <button>Randomize Color</button>
                </footer>
            </main>
        </div>
    );
}