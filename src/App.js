import mockup from './images/illustration-mockups.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <img className="mockup" src={mockup} alt="" />

        <div className="details">
          <h2>Build The Community Your Fans Will Love</h2>

          <p>
            Huddle re-imagines the way we build communities. You have a voice
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="btn">Register</button>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default App;
