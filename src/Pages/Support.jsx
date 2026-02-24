import { useState } from "react";

const Support = () => {
  const [feedback, setFeedback] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    if (!feedback.trim()) {
      alert("Please enter feedback before submitting");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message: feedback }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Feedback submitted successfully");
      setFeedback("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Something went wrong");
    }
  };

  return (
    <main className="text-page support-page">
      <header className="page-header">
        <h1 className="brand-title">BlueHaven</h1>
      </header>
      <section className="content-section">
        <h2 className="section-title">Need Help?</h2>
        <p className="section-text">
          BlueHaven is designed to be simple and intuitive. However, if you have
          questions, concerns, or feedback, this page is here to guide you.
        </p>
      </section>
      <section className="content-section">
        <h2 className="section-title">Support</h2>
        <p className="section-text">
          Your feedback helps improve BlueHaven. Feel free to share suggestions,
          ideas, or thoughts about your experience.You can also share if you encounter any bugs or technical issues while using Bluehaven 
        </p>
        <div className="support-box">
        <textarea
          className="support-textarea"
          value={feedback}
          onChange={(e) =>
          setFeedback(e.target.value)}
          placeholder="Share your feedback or describe any issue here..."></textarea>
        <button 
        className="support-submit" onClick={handleSubmit}>Submit</button>
        </div>
      </section>
    </main>
  );
};
export default Support;