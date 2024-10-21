
import './AboutPage.css';

const About = () => {
  return (
    <div>
      <header className="about-hero">
        <h1>About Velocity</h1>
        <p>Your ride-sharing solution for smarter travel.</p>
      </header>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At Velocity, we aim to make travel more accessible and affordable by 
          connecting passengers with shared rides. Our goal is to reduce the 
          number of vehicles on the road, lower transportation costs, and create 
          a community of like-minded individuals.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Co-founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Co-founder & CTO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Michael Lee</h3>
            <p>Product Manager</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Michael Lee</h3>
            <p>Product Manager</p>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Cost Effective</h3>
            <p>Share rides with others to significantly reduce travel costs.</p>
          </div>
          <div className="feature-card">
            <h3>Eco-Friendly</h3>
            <p>Reduce carbon footprint by sharing transportation.</p>
          </div>
          <div className="feature-card">
            <h3>Community Driven</h3>
            <p>Connect with people in your area and build a travel community.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <blockquote>
          Velocity made my daily commute so much easier and cheaper! Highly recommend!
          <cite>- User 1</cite>
        </blockquote>
        <blockquote>
          I love the concept of sharing rides. It’s eco-friendly and saves money!
          <cite>- User 2</cite>
        </blockquote>
      </section>

      <section className="call-to-action">
        <h2>Join the Movement!</h2>
        <p>Sign up today and start sharing rides with others.</p>
        <button>Get Started</button>
      </section>
    </div>
  );
};

export default About;
