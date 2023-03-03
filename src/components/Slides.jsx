import React, { useState } from "react";

const Slides = ({ slides }) => {
    const [count, setCount] = useState(0);

    const restart = () => {
        setCount(0);
    };

    const prev = () => {
        setCount(count - 1);
    };

    const next = () => {
        setCount(count + 1);
    };

    const Slide = ({ index, title, text }) => {
        if (index == count) {
            return (
                <div className="slide">
                    <h1>{title}</h1>
                    <h2>{text}</h2>
                </div>
            );
        }

        return null;
    };

    return (
        <div>
            <div>
                <button onClick={restart} disabled={count == 0 ? true : false}>
                    restart
                </button>
                <button onClick={prev} disabled={count == 0 ? true : false}>
                    prev
                </button>
                <button
                    onClick={next}
                    disabled={count == slides.length - 1 ? true : false}
                >
                    next
                </button>
            </div>

            {slides.map((slide, index) => (
                <Slide
                    key={index}
                    index={index}
                    title={slide.title}
                    text={slide.title}
                />
            ))}
        </div>
    );
};

export default Slides;
