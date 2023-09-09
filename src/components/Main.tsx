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

    function handleButton() {
        setHueValue(Math.floor(Math.random() * 360))
        setLightValue(Math.floor(Math.random() * 50) + 35)
    }

    function hslToHex(hue: number, sat: number, light: number):string {
        light /= 100;
        const a = sat * Math.min(light, 1 - light) / 100;
        const f = (n: number) => {
          const k = (n + hue / 30) % 12;
          const color = light - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
          return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }

    function copyCode() {
        const text = document.getElementById("hexcode");

        if(text instanceof HTMLInputElement) {
            // Copy the text inside the text field
            navigator.clipboard.writeText(text.value);
            
            // Alert the copied text
            alert("Copied the text: " + text.value);
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
                        <input type="text" className="textbox" value={hueValue} readOnly/>
                    </article>

                    <article>
                        <label htmlFor="saturation">S</label>
                        <input type="range" className="saturation" min="0" max="100" value={saturationValue} onChange={handleSlider}/>
                        <input type="text" className="textbox" value={saturationValue} readOnly/>
                    </article>

                    <article>
                        <label htmlFor="light">L</label>
                        <input type="range" className="light" min="0" max="100" value={lightValue} onChange={handleSlider}/>
                        <input type="text" className="textbox" value={lightValue} readOnly/>
                    </article>
                </section>

                <footer>
                    <input type="text" id='hexcode' value={hslToHex(hueValue, saturationValue, lightValue)} onClick={copyCode} readOnly/>
                    <button onClick={handleButton}>Randomize Color</button>
                </footer>
            </main>
        </div>
    );
}