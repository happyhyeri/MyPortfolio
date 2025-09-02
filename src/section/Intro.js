import '../styles/intro.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function IntroPage({ onBtnClick }) {
  return (
    <section id="intro">
      <div className="intro-container">
        <div className="intro-body">
          <p className="intro-text">
            안녕하세요, 풀스택 개발자가 되고 싶은 <br />
            <span className="intro-text-highlight">' 달팽이 이혜리 '</span>{' '}
            입니다. 🐌
          </p>

          <button
            type="button"
            className="btn btn-outline-success"
            id="about-btn"
            onClick={onBtnClick}
          >
            ABOUT ME →
          </button>
        </div>
      </div>
    </section>
  );
}
