import { useState } from "react";
import Modal from "../Components/Modal";
const Support = () => {
  const [feedback, setFeedback] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    if (!feedback.trim()) {
      setModalMessage("Please enter feedback before submitting");
      setModalOpen(true);
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/support`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message: feedback }),
      });

      const data = await res.json();

      if (!res.ok) {
        setModalMessage(data.message);
        setModalOpen(true);
        return;
      }

      setModalMessage(data.message || "Feedback submitted successfully");
      setModalOpen(true);
      setFeedback("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setModalMessage("Something went wrong");
      setModalOpen(true);
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
          ideas, or thoughts about your experience.You can also share if you
          encounter any bugs or technical issues while using Bluehaven
        </p>
        <div className="support-box">
          <textarea
            className="support-textarea"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your feedback or describe any issue here..."
          ></textarea>
          <button className="support-submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </section>
      <Modal
        isOpen={modalOpen}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
};
export default Support;
