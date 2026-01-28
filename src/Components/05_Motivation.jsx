import { useState, useEffect } from "react";
function Motivation() {
  const [isJumping, setisJumping] = useState(false);
  const quotes = [
    {
      text: "You don't need a perfect day, you just need one mindful moment.",
    },
    {
      text: "Small habits done gently shape a life that feels safe to live in.",
    },
    {
      text: "Progress isn't loud. It usually looks like showing up quitely.",
    },
    {
      text: "Your phone should support your life, not rush it.",
    },
    {
      text: "Rest is not falling behind. It's part of staying whole.",
    },
    {
      text: "Take care of your life like it belongs to someone you love.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, quotes.length]);

  return (
    <section className="motivation-section">
      <h2 className="motivation-title brand-font">Motivational Corner</h2>
      <p className="motivation-desc">
        The Motivational Corner provides gentle encouragement to support users
        in maintaining overall digital well-being.
      </p>

      <div className="motivation-slider">
        {/* LEFT ARROW */}
        <button  className="motivation-arrow"
          onClick={() =>
            setCurrent((current - 1 + quotes.length) % quotes.length)
          }
        >
           ‹
        </button>

        {/* SLIDE AREA */}
        <div
          className="motivation-window"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="motivation-track"
            style={{
              transform: `translateX(-${current * 100}%)`,
              transition: isJumping? "none":
              "transform 0.5s ease-in-out"
            }}
            onTransitionEnd={()=>
              setisJumping(false)}
          >
            {quotes.map((quote, index) => (
              <p key={index}
              className="motivation-quote">
              {quote.text}
             </p>
            ))}
            </div>
      <div className="motivation-dots">
        {quotes.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
      </div>
        {/* RIGHT ARROW */}
        <button className="motivation-arrow"
          onClick={() => 
            setCurrent((current + 1) % quotes.length) 
        }
        >
           ›
        </button>
      </div>
    </section>
  );
}

export default Motivation;