import { useState } from 'react';

import { IoEyeOff } from 'react-icons/io5';
import { IoEye } from 'react-icons/io5';

export function AlertModal(props) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <p
          className="modal-text"
          style={{
            paddingTop: '10px',
            paddingBottom: '10px',
            fontSize: '25px',
            fontWeight: '700',
          }}
        >
          확 인
        </p>

        <p
          className="modal-text"
          style={{ paddingTop: '10px', paddingBottom: '10px' }}
        >
          {props.message}
        </p>

        <div className="modal-buttons">
          <button
            type="button"
            class="btn btn-secondary"
            id="feedback-btn"
            style={{ width: '90%', height: '50px' }}
            onClick={() => {
              props.onAlertOkBtnClick();
            }}
          >
            확 인
          </button>
        </div>
      </div>
    </div>
  );
}

export function PasswordCheckModal(props) {
  const [password, setPassword] = useState('');
  const passwordHandle = (e) => {
    setPassword(e.target.value);
    props.setInputPassword(e.target.value);
  };
  const [showEyeIcon, setShowEyeIcon] = useState(false);
  const clickEyeIcon = () => {
    setShowEyeIcon((prev) => !prev);
  };

  const inputStyle = {
    fontSize: '20px',
    color: '#212414',
    padding: '15dpx',
    fontWeight: '500',
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <p
          className="modal-text"
          style={{ paddingTop: '10px', paddingBottom: '10px' }}
        >
          비밀번호 입력
        </p>

        {!props.isCorrectPw ? (
          <div
            style={{
              textAlign: 'start',
              paddingLeft: '15px',
              color: '#BB6653',
            }}
          >
            비밀번호가 올바르지 않습니다.
          </div>
        ) : (
          <div style={{ height: '25.5px' }}></div>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
          }}
        >
          <input
            class="form-control "
            type={showEyeIcon ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={passwordHandle}
            style={{
              ...inputStyle,
              width: '210px',
              height: '50px',
              marginRight: '20px',
            }}
          ></input>
          {showEyeIcon ? (
            <IoEye
              size={30}
              id="eye-icon"
              onClick={clickEyeIcon}
              color="#626f47"
            />
          ) : (
            <IoEyeOff
              size={30}
              id="eye-icon"
              onClick={clickEyeIcon}
              color="#626f47"
            />
          )}
        </div>
        <div className="modal-buttons">
          <button
            type="button"
            class="btn btn-secondary"
            id="feedback-btn"
            style={{ width: '120px', height: '50px' }}
            onClick={() => {
              props.onConfirm();
            }}
          >
            확인
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            id="feedback-btn"
            style={{ width: '120px', height: '50px' }}
            onClick={props.onCancel}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <p
          className="modal-text"
          style={{
            paddingTop: '10px',
            paddingBottom: '10px',
            fontSize: '25px',
            fontWeight: '700',
          }}
        >
          확 인
        </p>

        <p
          className="modal-text"
          style={{ paddingTop: '10px', paddingBottom: '10px' }}
        >
          {message}
        </p>

        <div className="modal-buttons" style={{}}>
          <button
            type="button"
            class="btn btn-secondary"
            id="feedback-btn"
            style={{ width: '120px', height: '50px' }}
            onClick={onConfirm}
          >
            네
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            id="feedback-btn"
            style={{ width: '120px', height: '50px' }}
            onClick={onCancel}
          >
            아니요
          </button>
        </div>
      </div>
    </div>
  );
}
