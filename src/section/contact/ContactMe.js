import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function ContactSection(props) {
  const [showContactScreen, setShowContactScreen] = useState(false);
  const [btnText, setBtnText] = useState('🐌..CLICK ME');
  const ClickTextBtn = () => {
    setShowContactScreen((prev) => !prev);
    setBtnText('좋아요🤍');
  };
 



  return (
    <>
      <div className="contact-body">
        <div>
          {showContactScreen ? (
            <div id="contact-text">
              <span> CONTACT ME </span>
              <div id="contact-item">
                <span style={{ padding: '10px' }}>{props.hyeriEmail}</span>
                <span
                  id="custom-badge"
                  className="badge rounded-pill text-bg-secondary"
                  onClick={props.copyEmail}
                >
                  copy
                </span>{' '}
              </div>
            </div>
          ) : (
            
            <p> 달팽이 한마리 키워보실래요?</p>
            
          )}
        </div>
        <div>
          <span className="click-text" onClick={ClickTextBtn}>
            {btnText}
          </span>
        </div>
      </div>
    </>
  );
}
