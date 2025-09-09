import '../styles/about-me.css';
import hyeriImage from '../img/hyeri.jpg';

export default function AboutMePage({ sectionRef }) {
  return (
    <section id="about" ref={sectionRef}>
      <div className="about-container">
        <div className="about-item1">
          <AboutMe></AboutMe>
        </div>
        <div className="about-item2">
          <AboutMeDetail></AboutMeDetail>
        </div>
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <>
      <h1 className="about-me-title">ABOUT ME</h1>

      <div className="about-image">
        <img src={hyeriImage} className="about-img" alt="Hyeri" />
      </div>

      <div className="about-text">
        <span>
          <span className="about-text-highlight">새로운 것에 대한 두려움</span>
          을
        </span>
        <span>
          <span className="about-text-highlight"> 배움의 즐거움 </span>으로
          하나씩 넘어온 1년차 개발자 입니다.
        </span>
        <br className='space'/>
        <span>
        느리더라도 한 걸음씩, 그{' '}
        <span className="about-text-highlight">배움의 흔적</span> 위에 </span>
        <span>
        <span className="about-text-highlight"> 성장의 껍질</span>을 쌓아가고
        있습니다.
        </span>
       <br className='space'/>
        <span>
        배우는 것을 좋아하고 다양한 기술 경험을 통해{' '}</span>
        <span>
        <span className="about-text-highlight">' 튼튼한 집 '</span>을 만들고
        싶습니다.
        </span>
      </div>
    </>
  );
}

function AboutMeDetail() {
  return (
    <>
      <div className="personal-history">
        <h4> Personal History</h4>
        <div className="contents">
          <h5>학력</h5>
          <p>전남대학교 신문방송학과</p>

          <h5>교육</h5>
          <p style={{ display: 'flex' }}>
            한국경영원 인재개발원{' '}
            <span className="date">- 2023.09 ~ 2024.03</span>
          </p>

          <h5>경력 (1년 4개월)</h5>
          <p style={{ display: 'flex' }}>
            씨에스캠(주) <span className="date">- 2024.04 ~ 2025.07</span>
          </p>
        </div>
      </div>

      <div className="qualification">
        <h4> Qualifications</h4>
        <div className="contents">
          <h5>컴퓨터 관련 자격증</h5>
          <ul>
            <li>
              <span className="date">2023.06</span> 정보처리기사{' '}
            </li>
            <li>
              <span className="date">2022.07</span> 컴퓨터 활용능력 1급
            </li>
          </ul>
        </div>
      </div>

      <div className="skills">
        <h4> Skills</h4>
        <div className="contents">
          <h5> 언어</h5>
          <ul>
            <li>Kotlin </li>
            <li>C# </li>
            <li>C++ </li>
            <li>C </li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <h5>프레임워크/라이브러리</h5>
          <ul>
            <li>Jetpack Compose </li>
            <li>WinForms </li>
            <li>GTK </li>
            <li>Android SDK </li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <h5>데이터 베이스</h5>
          <ul>
            <li>MySQL</li>
          </ul>
          <h5>운영체제/플랫폼</h5>
          <ul>
            <li>Android</li>
            <li>Windows</li>
          </ul>
          <h5>통신/프로토콜</h5>
          <ul>
            <li>REST API</li>
            <li>ONVIF</li>
            <li>시리얼 통신</li>
            <li>TCP/IP 통신</li>
          </ul>
          <h5>개발 도구 /환경</h5>
          <ul>
            <li>Android Studio</li>
            <li>Visual Studio</li>
            <li>Visual Studio Code</li>
            <li>Node.js (React 개발 환경)</li>
            <li>HeidiSQL</li>
          </ul>
        </div>
      </div>
    </>
  );
}
