import { useState, useEffect } from "react";
function Reviews() {
  <header className="page-header">
  <h1 className="brand-title">BlueHaven</h1>
  </header>
  const [isJumping, setisJumping] = useState(false);
  const reviews = [
    {
      text: "The habit tracker helped me stay consistent without pressure it feels supportive.",
      name: "Aiko M"
    },
    {
      text: "The mood logging helped me notice emotionl patterns I had never paid attention to.",
      name: "Sora T"
    },
    {
      text: "Bluehaven feels calm and easy to retun to without guilt, even after missing a day.",
      name: "Yuki A"
    },
    {
      text: "Insights made my habits feel like they're meaningful.",
      name: "Luna V"
    },
    {
      text: "The design feels gentle. It doesn't guilt you for missing days which really matters.",
      name: "Kai N"
    },
    {
      text: "It helped me slow down and reflect instead of rushingg through my days.",
      name: "Sylus D"
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide (pause on hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, reviews.length]);

  return (
    <section className="review-section">
      <h2 className="review-title brand-font">What our user's say</h2>
      <p className="review-desc">
        BlueHaven supports habit building, emotional awareness, mindful productivity, and personal growth. 
      </p>

      <div className="review-slider">
        {/* LEFT ARROW */}
        <button  className="review-arrow"
          onClick={() =>
            setCurrent((current - 1 + reviews.length) % reviews.length)
          }
        >
           ‹
        </button>

        {/* SLIDE AREA */}
        <div
          className="review-window"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="review-track"
            style={{
              transform: `translateX(-${current * 100}%)`,
              transition: isJumping? "none":
              "transform 0.5s ease-in-out"
            }}
            onTransitionEnd={()=>
              setisJumping(false)}
          >
            {reviews.map((review, index) => (
              <div key={index}
              className="review-slide">
             <p className="review-quote">
              {review.text}
              </p>
              <p className="review-author">
              _{review.name}/
              </p>
             </div>
            ))}
            </div>
        {/* DOTS - now inside the box */}
      <div className="review-dots">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
      </div>
        {/* RIGHT ARROW */}
        <button className="review-arrow"
          onClick={() => 
            setCurrent((current + 1) % reviews.length) 
        }
        >
           ›
        </button>
      </div>
      <section className="content-section">
        <h2 className="section-title">Why Users Trust BlueHaven</h2>
         <p className="section-text">
         BlueHaven focuses on simplicity, clarity, and emotional well-being. Instead
         of overwhelming users with data or strict routines, it encourages mindful
        consistency and gentle self-reflection.
       </p>
       <p className="section-text">
         The platform is designed to feel safe and approachable, helping users return
         without guilt and progress at their own pace.
        </p>
     </section>
     <section className="content-section">
     <p className="section-text">
       Every journey looks different. BlueHaven supports users through small,
       meaningful steps, helping them build habits and awareness in a way that feels
      personal and sustainable.
    </p>
   </section>
    </section>
  );
}
export default Reviews;