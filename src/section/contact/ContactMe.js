import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function ContactSection() {
  const [showContactScreen, setShowContactScreen] = useState(false);
  const [btnText, setBtnText] = useState('🐌..CLICK ME');
  const ClickTextBtn = () => {
    setShowContactScreen((prev) => !prev);
    setBtnText('좋아요🤍');
  };
  const hyeriEmail = 'hyeri2007@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(hyeriEmail).then(() => {
      alert('복사되었습니다.');
    });
  };

  return (
    <>
      <div className="contact-body">
        <div style={{flex : "0 0 60%", paddingTop:'50px'}}>
          {showContactScreen ? (
            <div id="contact-text">
              <span> CONTACT ME </span>
              <div id="contact-item">
                <span style={{ padding: '10px' }}>{hyeriEmail}</span>
                <span
                  id="custom-badge"
                  className="badge rounded-pill text-bg-secondary"
                  onClick={copyEmail}
                >
                  copy
                </span>{' '}
              </div>
            </div>
          ) : (
            
            <p style={{paddingTop:'40px'}}> 달팽이 한마리 키워보실래요?</p>
            
          )}
        </div>
        <div style={{flex : "0 0 40%"}}>
          <span className="click-text" onClick={ClickTextBtn}>
            {btnText}
          </span>
        </div>
      </div>
    </>
  );
}
