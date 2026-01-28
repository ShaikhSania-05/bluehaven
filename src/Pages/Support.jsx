const Support = () => {
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
        <h2 className="section-title">FAQ</h2>
        <p className="section-text">• What is BlueHaven?</p>
        <p className="section-text">• Is BlueHaven free to use?</p>
        <p className="section-text">• Do I need an account to access features?</p>
        <p className="section-text">• Is my data saved securely?</p>
        <p className="section-text">• Can I edit or remove my entries?</p>
      </section>
      <section className="content-section">
        <h2 className="section-title">Feedback</h2>
        <p className="section-text">
          Your feedback helps improve BlueHaven. Feel free to share suggestions,
          ideas, or thoughts about your experience.
        </p>
        <div className="support-box">
        <textarea
          className="support-textarea"
          placeholder="Share your feedback here..."
        />
        </div>
      </section>
      <section className="content-section">
        <h2 className="section-title">Report an Issue</h2>
        <p className="section-text">
          If you encounter any bugs or technical issues while using BlueHaven,
          you can report them here.
        </p>
        <div className="support-box">
        <textarea
          className="support-textarea"
          placeholder="Describe the issue here..."
        />
        </div>
      </section>

    </main>
  );
};
export default Support;