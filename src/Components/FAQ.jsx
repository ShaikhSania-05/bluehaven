function FAQ() {
    return (
<section className="faq-section">
  <h2 className="faq-title">Frequently Asked Questions</h2>
  <p className="faq-subtitle">
    Everything you need to know before getting started.
  </p>

  <div className="faq-list">
    <div className="faq-item">
      <h4 className="faq-question">What is BlueHaven?</h4>
      <p className="faq-answer">
        BlueHaven is a self-care and productivity platform designed to help you
        track habits, log moods, and stay motivated in a calm, supportive space.
      </p>
    </div>

    <div className="faq-item">
      <h4 className="faq-question">Do I need an account to use BlueHaven?</h4>
      <p className="faq-answer">
        You can explore most features without an account. Creating one allows
        you to save progress and access it later.
      </p>
    </div>

    <div className="faq-item">
      <h4 className="faq-question">Can I customize my habits and mood logs?</h4>
      <p className="faq-answer">
        Yes! You can add, remove, and update habits, and log your mood daily
        based on how you feel.
      </p>
    </div>

    <div className="faq-item">
      <h4 className="faq-question">Is BlueHaven free to use?</h4>
      <p className="faq-answer">
        Yes. BlueHaven is currently free and built as a learning-focused project
        with wellbeing at its core.
      </p>
    </div>
  </div>
</section>
    );
}
export default FAQ;