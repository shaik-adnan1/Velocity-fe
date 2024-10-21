import './Help.css'; // Custom CSS for the Help page

const Help = () => {
  return (
    <div className="help-container">
      <h1 className="help-heading">How can we assist you?</h1>
      
      <div className="faq-section">
        <div className="faq-item">
          <h3 className="faq-question">What is Velocity?</h3>
          <p className="faq-answer">Velocity is a car-pooling service that allows users to share rides and save costs.</p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">How does car-pooling work?</h3>
          <p className="faq-answer">Car-pooling works by allowing drivers to share their rides with others traveling to the same location, splitting the fuel costs and reducing traffic congestion.</p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">How do I contact customer support?</h3>
          <p className="faq-answer">You can contact us via email at support@velocity.com or call our helpline at 123-456-7890.</p>
        </div>
      </div>

      <form className="help-form">
        <h2>Still need help? Contact us!</h2>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Describe your issue"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Help;
