import React from "react";

export function ColorMain() {
    return (
        <main>
            <aside id="color-box">
            </aside>

            <section>
                <article>
                    <label htmlFor="hue">H</label>
                    <input type="range" id="hue" min="0" max="360" />
                    <input type="text" className="textbox" name="0" value={69}/>
                </article>

                <article>
                    <label htmlFor="saturation">S</label>
                    <input type="range" id="saturation" min="0" max="100" value={100}/>
                    <input type="text" className="textbox" name="0" value={100}/>
                </article>

                <article>
                    <label htmlFor="light">L</label>
                    <input type="range" id="light" min="0" max="100" value={50}/>
                    <input type="text" className="textbox" name="0" value={50}/>
                </article>
            </section>
        </main>
    );
}