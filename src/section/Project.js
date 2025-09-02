import '../styles/project.css';
import img1 from '../img/project_img1.jpg';
import img2 from '../img/project_img2.jpg';
import img3 from '../img/project_img3.jpg';
import img4 from '../img/project_img4.jpg';
import splashImg from '../img/splash.jpg';
import regiPhoneImg from '../img/registerphone.jpg';
import orderMethodSelectImg from '../img/order_method_selector.jpg';
import orderPhoneImg from '../img/order_phone.jpg';
import paymentApiImg from '../img/payment.jpg';
import projectDeficultyImg from '../img/project_deficulty.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function ProjectPage() {
  return (
    <section id="project">
      <div className="project-container">
        <div className="project-item0">
          <h1 className="project-title">PROJECT</h1>
          <h3 className="project-subtitle">Android - Coffee Order App</h3>
        </div>
        <div className="project-item1">
          <SlideImg></SlideImg>
        </div>
        <div className="project-item2">
          <ProjectDetail></ProjectDetail>
        </div>
      </div>
    </section>
  );
}

function ProjectDetail() {
  return (
    <>
      <div className="project-details">
        <AboutSection></AboutSection>
        <IssueSection></IssueSection>
        <PreviewSection></PreviewSection>
      </div>
    </>
  );
}

function PreviewSection() {
  const previewImgs = [
    { id: 0, title: '스플래쉬 화면', img: splashImg },
    { id: 1, title: '홈 화면', img: img1 },
    { id: 2, title: '휴대폰 등록 화면', img: regiPhoneImg },
    { id: 3, title: '주문 방법 선택 화면', img: orderMethodSelectImg },
    { id: 4, title: '메뉴 주문 화면', img: img2 },
    { id: 5, title: '장바구니 화면', img: img3 },
    { id: 6, title: '결제 api 클라이언트 화면', img: paymentApiImg },
    { id: 7, title: '포인트 적립 화면', img: img4 },
    { id: 8, title: '전화 주문 화면', img: orderPhoneImg },
  ];

  return (
    <>
      <p>
        <span style={{ paddingBottom: '10px' }} className="highlight-title">
          👩🏻‍💻 미리보기
        </span>
      </p>
      <hr />

      <h4></h4>
      <div style={{ paddingBottom: '10px', lineHeight: '1.6' }}>
        <iframe
          id="youtube-player"
          allowfullscreen=""
          frameborder="0"
          src="https://www.youtube.com/embed/zVFAzDp9MVw"
          title="coffee village player"
        ></iframe>
      </div>
      <div></div>
      <div
        id="preview-img-container"
        style={{ paddingBottom: '10px', lineHeight: '1.6' }}
      >
        {previewImgs.map((item) => (
          <PrevieImgTitleSection
            title={item.title}
            imgSrc={item.img}
          ></PrevieImgTitleSection>
        ))}
      </div>
    </>
  );
}
function PrevieImgTitleSection(props) {
  return (
    <>
      <div id="preview-img-card">
        <p>{props.title}</p>
        <img src={props.imgSrc} alt={props.title} />
      </div>
    </>
  );
}

function IssueSection() {
  return (
    <>
      <p>
        <span style={{ paddingBottom: '10px' }} className="highlight-title">
          💡 프로젝트를 진행하며
        </span>
      </p>
      <hr />

      <h4>🤔 만들면서 했던 고민</h4>
      <p style={{ paddingBottom: '10px', lineHeight: '1.6' }}>
        <ul>
          <li className="higtlight-text">
            반복되는 UI 코드의 재사용 방법 (Composable 구조화 고민)
          </li>
          <ul>
            <li>
              선언형 UI의 특성상 유사한 UI 코드가 자주 반복되어, 이를 어떻게
              효율적으로 재사용할 수 있을지 고민
            </li>
            <li>MVVM 패턴 고려</li>
          </ul>
          <li className="higtlight-text"> 데이터 관리 </li>

          <ul>
            <li>
              회원 관리 : SharedPreferences
              <ul>
                <li>선택 이유</li>
                <ul>
                  <li>구조화 필요 없는 Key-Value 형태의 데이터</li>
                  <li>앱 내에서만 사용. 빠른 접근성과 간단한 구현이 중요</li>
                </ul>
              </ul>
            </li>
            <li>즐겨찾기, 최신주문 : Room</li>
            <ul>
              <li>선택 이유</li>
              <ul>
                <li>CRUD 연산이 필요</li>
                <li>사용자별 개별 데이터로 로컬 저장이 적합하다 판단. </li>
              </ul>
            </ul>
            <li>구매내역 및 포인트 관리 : 외부 DB</li>
            <ul>
              <li>선택이유</li>
              <ul>
                <li>여러 기기에서 동일한 데이터 접근이 가능해야 함.</li>
                <li>
                  관리자 측 통계 및 포인트 시스템 운영을 위해 서버 기반 저장이
                  필요하다 판단.
                </li>
              </ul>
            </ul>
          </ul>
        </ul>
      </p>
      <h4>🤔 프로젝트 진행시 겪었던 어려움</h4>
      <p style={{ paddingBottom: '10px', lineHeight: '1.8' }}>
        <ul>
          <li className="higtlight-text">
            상세 주문 화면 : 옵션 선택 시 가격 증가 문제
          </li>
          <DefficultyTable1></DefficultyTable1>
          <img
            className="project-deficulty-img"
            src={projectDeficultyImg}
            alt="project_deficulty_img"
            style={{ paddingBottom: '10px' }}
          />
          <li className="higtlight-text">
            {' '}
            Order창 메뉴 리스트에서 화면 갱신이 느린 문제{' '}
          </li>
          <DefficultyTable2></DefficultyTable2>
        </ul>
      </p>
    </>
  );
}

function AboutSection() {
  return (
    <>
      <p>
        <span className="highlight-title" style={{ paddingBottom: '10px' }}>
          🗒️ ABOUT PROJECT
        </span>
      </p>
      <hr />
      <h4>⭐ 앱 개요</h4>
      <p style={{ paddingBottom: '10px' }}>
        사용자가 메뉴를 확인하고, 옵션을 선택해 장바구니에 담고 주문할 수 있는
        모바일 앱입니다. <br />
        Android Jetpack Compose를 기반으로 제작했습니다.
      </p>

      <h4>📆 프로젝트 기간</h4>
      <p style={{ paddingBottom: '10px' }}>2025년 7월 14 ~ 2025년 8월 5일</p>
      <h4>👩🏻‍💻 SKILLS & TOOLS</h4>
      <ul>
        <li>
          <span className="higtlight-text">Language</span> : Kotlin
        </li>
        <li>
          <span className="higtlight-text">Architecture</span> : MVVM (ViewModel
          기반 상태관리 + Compose UI 렌더링)
        </li>
        <li>
          <span className="higtlight-text">UI TOOLKIT</span> : Jetpack Compose
        </li>
        <li>
          <span className="higtlight-text">Local DB</span> : Room
        </li>
        <li>
          <span className="higtlight-text">State Management</span> :
          MutableState , StateFlow
        </li>
        <li>
          <span className="higtlight-text"> Design Tool </span>: Figma
        </li>
        <li>
          <span className="higtlight-text">Payment API </span>: Bootpay(Sandbox)
        </li>
      </ul>
      <h4>⭐ 구현 기능</h4>
      <div>
        <ImplementationFunctionTable></ImplementationFunctionTable>
      </div>
    </>
  );
}
function DefficultyTable1() {
  return (
    <table class="table">
      <tbody>
        <tr>
          <th scope="row" style={{ width: '90px' }}>
            문제상황
          </th>
          <td>
            사용자 옵션 선택시, 가격 +500원 씩 증가하도록 구현했으나 버튼을
            반복적으로 클릭할 경우 가격 계속 누적되는 문제 발생
          </td>
        </tr>
        <tr>
          <th scope="row">원인</th>
          <td>
            mutableStateOf 변수를 활용해서 값이 변경될때마다 UI갱신을 계속
            해주고 있었음
          </td>
        </tr>
        <tr>
          <th scope="row">예시</th>
          <td>
            사이즈 옵션 중 기본과 라지 버튼을 반복적으로 누르면 가격이 +500,
            +1000, +1500… 계속 증가
          </td>
        </tr>
        <tr>
          <th scope="row">해결 방법</th>
          <td>
            derivedStateOf를 활용하여 옵션 상태에 따라 가격을 계산하는 로직 구현
          </td>
        </tr>

        <tr>
          <th scope="row">배운점</th>
          <td>
            <ul>
              <li> derivedStateOf 변수을 알게 됨</li>
              <li>
                계산 작업에는 derivedStateOf 변수를 통해 상태 기반 로직을
                효율적으로 관리 할 수 있다는 점을 배움{' '}
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function DefficultyTable2() {
  return (
    <table class="table">
      <tbody>
        <tr>
          <th scope="row" style={{ width: '90px' }}>
            문제상황
          </th>
          <td>
            주문 화면에서 약 57개 이상의 메뉴를 필터링 해서 탭 전환시 UI가
            느리게 갱신되는 문제 발생
          </td>
        </tr>
        <tr>
          <th scope="row">원인</th>
          <td>
            메뉴 카드에 포함된 고해상도 JPG 이미지 → 렌더링 비용 증가
            <br />
            (초기에는 LazyVerticalGrid쪽이나 탭에 따른 메뉴 Filtering로직문제,
            상태관리,등을 의심함)
          </td>
        </tr>

        <tr>
          <th scope="row">해결 방법</th>
          <td>drawable 이미지 해상도 축소 ( 3000px→100px)</td>
        </tr>

        <tr>
          <th scope="row">배운점</th>
          <td>
            <ul>
              <li> 병목의 원인은 항상 코드 로직에만 있는 것이 아님</li>
              <li>리소스의 최적화 중요함</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
function ImplementationFunctionTable() {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">기능</th>
          <th scope="col">설명</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">
            로그인, 로그아웃 <br />
            (휴대폰 등록)
          </th>
          <td>SharedPreferences 사용 - key,value로 단순 데이터 저장 및 확인</td>
        </tr>
        <tr>
          <th scope="row">메뉴 즐겨찾기 기능</th>
          <td>
            Room DB 활용- 구조적인 리스트 형태 데이터 관리 및 즐겨찾기 추가/삭제
            등 CRUD 처리
          </td>
        </tr>
        <tr>
          <th scope="row">장바구니 기능</th>
          <td>
            메뉴와 옵션 데이터를 장바구니 리스트에 저장, 옵션 및 수량 변경에
            다른 금액 계산 로직 실시간 반영
          </td>
        </tr>
        <tr>
          <th scope="row">옵션 선택 기능</th>
          <td>
            메뉴별 옵션(사이즈, 샷 추가 등)에 따라 UI를 동적으로 구성 및 가격,
            총 수량 UI에 실시간 반영
          </td>
        </tr>

        <tr>
          <th scope="row">결제 기능</th>
          <td>
            부트페이 결제 API(Sandbox 버전)을 연동하여 클라이언트 결제 요청 흐름
            구현. <br />
            테스트 환경에서 결제 프로세스를 시뮬레이션. 실제 결제 연동을 위한
            기반 마련
          </td>
        </tr>
        <tr>
          <th scope="row">포인트 적립 기능</th>
          <td>결제 성공 후 포인트 계산 및 저장 로직.</td>
        </tr>
        <tr>
          <th scope="row">최근 주문 메뉴 등록 기능</th>
          <td>
            Room DB 활용- 구조적인 리스트 형태 데이터 관리. 구매 시간 기준으로
            정렬
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function SlideImg() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    console.log('보여줘어어');
    setShow(true);
  };
  const slideImages = [
    {
      id: 0,
      img: img1,
    },
    {
      id: 1,
      img: img2,
    },
    {
      id: 2,
      img: img3,
    },
    {
      id: 3,
      img: img4,
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  const preSlide = () => {
    setCurrentIdx(
      (preIdx) => (preIdx - 1 + slideImages.length) % slideImages.length
    );
  };
  const nextSlide = () => {
    setCurrentIdx((preIdx) => (preIdx + 1) % slideImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval); // 클리어 필요
  }, [currentIdx]);

  const onGithubLinkClick = () => {
    window.open('https://github.com/happyhyeri/CoffeeVillage', '_blank');
  };

  const onUiPrototypeCilck = () => {
    window.open(
      'https://www.figma.com/proto/eYzdn3t6KCExvAD4NrIgfV/coffeeVillage?node-id=13-23&t=JIZM7PAL9YinZyJn-1',
      '_blank'
    );
  };
  return (
    <>
      <img
        className="project-img"
        src={slideImages[currentIdx].img}
        alt={`slide ${currentIdx}`}
        onClick={handleShow}
      />
      <p
        style={{
          color: '#f5ecd5',
          textAlign: 'start',
          fontSize: '18px',
          fontWeight: '500',
        }}
      >
        {' '}
        이미지 클릭 시 관련 링크를 보실 수 있습니다.
      </p>
      <div className="modal">
        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              프로젝트 관련 링크 주소
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="modal-body">
              <h5 className="link-text" onClick={onGithubLinkClick}>
                {' '}
                🔗 github 주소
              </h5>

              <h5 className="link-text" onClick={onUiPrototypeCilck}>
                {' '}
                🔗 UI 프로토타입 보러가기
              </h5>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
