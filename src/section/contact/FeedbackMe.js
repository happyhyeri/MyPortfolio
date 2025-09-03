import { useState, useEffect } from 'react';

import { IoEyeOff } from 'react-icons/io5';
import { IoEye } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AlertModal, PasswordCheckModal, ConfirmModal } from './modal';
import { useSelector, useDispatch } from 'react-redux';
import {
  addFeedback,
  deleteFeedback,
  editFeedback,
} from '../../redux/store/feedbackSlice';
import { setSelectedFeedbackItem } from '../../redux/store/selectedFeedbackItemSlice';

export default function FeedbackSection() {
  const feedbacks = useSelector((state) => state.feedbacks);
  const dispatch = useDispatch();
  // const [feedbacks, setFeedbacks] = useState([]);

  //모달
  const [showAlertModal, setShowAlertModal] = useState(false);

  const [alertMessage, setAlertMessage] = useState('');
  const onAddFeedbacks = (_nickname, _body, _password) => {
    const newFeedback = {
      id: uuidv4(),
      nickname: _nickname,
      body: _body,
      password: _password,
      date: nowTime(),
      isEdit: false,
    };
    dispatch(addFeedback(newFeedback));
    //setFeedbacks((prev) => [...prev, newFeedback]);
    setAlertMessage('등록 되었습니다.');
    setShowAlertModal((prev) => !prev);
  };

  const onDeleteFeedback = (_id) => {
    dispatch(deleteFeedback(_id));
    setAlertMessage('삭제 되었습니다.');
    setShowAlertModal((prev) => !prev);
  };

  const onEditFeedback = (feedback) => {
    dispatch(editFeedback(feedback));
    setAlertMessage('수정 되었습니다.');
    setShowAlertModal((prev) => !prev);
  };

  const onAlertOkBtnClick = () => {
    setShowAlertModal((prev) => !prev);
  };

  //여기 페이지네이션
  const [page, setPage] = useState(1);
  const itemPerPage = 2;
  const changePageHandler = (page) => {
    setPage(page);
  };
  //페이지네이션을 통해 보여줄 slice된 리스트
  const [currentList, setCurrentList] = useState(feedbacks);
  const indexOfLastItem = page * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;

  useEffect(() => {
    setCurrentList(feedbacks.slice(indexOfFirstItem, indexOfLastItem));
  }, [page, feedbacks]);

  return (
    <div className="feedback-body">
      {showAlertModal && (
        <AlertModal
          message={alertMessage}
          onAlertOkBtnClick={onAlertOkBtnClick}
        ></AlertModal>
      )}
      <div id="feedback-title">
        <h1 style={{ fontSize: 45, fontWeight: 700, color: '#fff' }}>
          Feedback Me
        </h1>
      </div>
      <div id="feedback-input">
        <FeedbackInputSection
          onAddFeedbacks={onAddFeedbacks}
          onEditFeedback={onEditFeedback}
        ></FeedbackInputSection>
      </div>
      <div id="feedback-main">
        <div id="feedback-main-background">
          <FeedbackMainSection
            onDeleteFeedback={onDeleteFeedback}
            feedbackList={feedbacks}
          ></FeedbackMainSection>
        </div>
      </div>
    </div>
  );
}

function FeedbackInputSection(props) {
  const selectedFeedbackItem = useSelector(
    (state) => state.selectedFeedbackItem
  );
  const dispatch = useDispatch();
  const [btnType, setBtnType] = useState(null);

  const [showEyeIcon, setShowEyeIcon] = useState(false);
  const inputStyle = {
    fontSize: '20px',
    color: '#212414',
    padding: '15dpx',
    fontWeight: '500',
  };

  const clickEyeIcon = () => {
    setShowEyeIcon((prev) => !prev);
  };

  const inputHeight = '50px';

  const [password, setPassword] = useState('');
  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };
  const [nickname, setNickname] = useState('');
  const nicknameHandle = (e) => {
    setNickname(e.target.value);
  };

  const [content, setContent] = useState('');
  const contentHandle = (e) => {
    setContent(e.target.value);
  };

  const isNotEmptyInputs =
    password.trim() !== '' && nickname.trim() !== '' && content.trim() !== '';

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmModalmessage, setConfirmModalmessage] = useState('');

  const onClickOkBtn = () => {
    if (btnType === 'add') {
      setConfirmModalmessage('글을 등록하시겠습니까?');
    } else if (btnType === 'edit') {
      setConfirmModalmessage('글을 수정하시겠습니까?');
    }
    setShowConfirmModal((prev) => !prev);
  };
  const onClickConfirmBtn = () => {
    if (btnType === 'add') {
      props.onAddFeedbacks(nickname, content, password);
    } else if (btnType === 'edit') {
      const selected = {
        id: selectedFeedbackItem.id,
        nickname: nickname,
        body: content,
        password: password,
        date: nowTime(),
        isEdit: true,
      };
      props.onEditFeedback(selected);
      dispatch(setSelectedFeedbackItem(null));
    }
    setContent('');
    setNickname('');
    setPassword('');
    setShowConfirmModal((prev) => !prev);
  };

  useEffect(() => {
    if (selectedFeedbackItem != null) {
      setContent(selectedFeedbackItem.body);
      setNickname(selectedFeedbackItem.nickname);
      setPassword(selectedFeedbackItem.password);
      setBtnType('edit');
    } else {
      setBtnType('add');
    }
  }, [selectedFeedbackItem]);

  return (
    <>
      {showConfirmModal && (
        <ConfirmModal
          message={confirmModalmessage}
          onCancel={onClickOkBtn}
          onConfirm={onClickConfirmBtn}
        ></ConfirmModal>
      )}
      <input
        className="form-control"
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={nicknameHandle}
        style={{ ...inputStyle }}
      ></input>
      <textarea
        className="form-control gap-2 "
        rows="6"
        style={inputStyle}
        value={content}
        onChange={contentHandle}
      ></textarea>
      <div id="pw-btn-item">
        <span
          style={{
            width: '60%',
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          <input
            className="form-control "
            type={showEyeIcon ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={passwordHandle}
            style={{ ...inputStyle, width: '70%', height: inputHeight }}
          ></input>
          {showEyeIcon ? (
            <IoEye size={30} id="eye-icon" onClick={clickEyeIcon} />
          ) : (
            <IoEyeOff size={30} id="eye-icon" onClick={clickEyeIcon} />
          )}
        </span>

        <button
          type="submit"
          className="btn btn-light"
          id="ok-btn"
          style={{
            height: inputHeight,
            width: '20%',
            alignItems: 'center',
            padding: '0px',
            margin: '0px',
          }}
          disabled={!isNotEmptyInputs}
          onClick={onClickOkBtn}
        >
          OK
        </button>
      </div>
    </>
  );
}

function FeedbackMainSection(props) {
  const list = props.feedbackList;

  return (
    <>
      {[...list]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((item, index) => (
          <FeedbackCard
            key={index}
            onDeleteFeedback={props.onDeleteFeedback}
            feedbackItem={item}
          ></FeedbackCard>
        ))}
    </>
  );
}

function FeedbackCard(props) {
  const body = props.feedbackItem.body;

  return (
    <div className="feedback-card">
      <CardHeader
        onDeleteFeedback={props.onDeleteFeedback}
        feedbackItem={props.feedbackItem}
      ></CardHeader>
      <hr
        style={{
          height: '2px',
          backgroundColor: '#31351e',
          border: 'none',
          margin: '10px 0',
        }}
      />
      <p
        style={{
          textAlign: 'start',
          paddingTop: '5px',
          paddingLeft: '10px',
          paddingRight: '10px',
          whiteSpace: 'pre-wrap',
        }}
      >
        {body}
      </p>
    </div>
  );
}

function CardHeader(props) {
  const nickname = props.feedbackItem.nickname;
  const date = props.feedbackItem.date;
  const uuid = props.feedbackItem.id;
  const password = props.feedbackItem.password;
  const isEdit = props.feedbackItem.isEdit;

  const [showPwCheckModal, setShowPwCheckModal] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [isCorrectPw, setIsCorrectPw] = useState(true);
  const [buttonType, setButtonType] = useState(null);

  const dispatch = useDispatch();

  const onDeleteBtnClick = () => {
    setButtonType('delete');
    setShowPwCheckModal((prev) => !prev);
  };
  const onEditBtnClick = () => {
    setButtonType('edit');
    setShowPwCheckModal((prev) => !prev);
  };
  const sel = useSelector((state) => state.selectedFeedbackItem);
  /*모달 버튼 함수들 */
  const onConfirmBtnClick = () => {
    if (password === inputPassword) {
      if (buttonType === 'delete') {
        setIsCorrectPw(true);
        setShowPwCheckModal((prev) => !prev);
        props.onDeleteFeedback(uuid);
      } else if (buttonType === 'edit') {
        setIsCorrectPw(true);
        dispatch(setSelectedFeedbackItem(props.feedbackItem));
        setShowPwCheckModal((prev) => !prev);
      }
    } else {
      setIsCorrectPw(false);
    }
  };

  const onCancleBtnClick = () => {
    setShowPwCheckModal((prev) => !prev);
    setIsCorrectPw(true); //닫고 나서 열릴때를 위해서
  };

  return (
    <>
      {showPwCheckModal && (
        <PasswordCheckModal
          setInputPassword={
            setInputPassword
          } /*자식요소에서 값을 받아오는 방식*/
          onConfirm={onConfirmBtnClick}
          onCancel={onCancleBtnClick}
          isCorrectPw={isCorrectPw}
        ></PasswordCheckModal>
      )}
      <div
        style={{
          justifyContent: 'space-between',
          display: 'flex',
          flexDirection: 'row',
          paddingLeft: '10px',
          paddingRight: '10px',
          paddingBottom: '0px',
          alignItems: 'center',
        }}
      >
        <div>
          <span style={{ marginRight: '35px', fontSize: '20px' }}>
            {nickname}
          </span>
          <span style={{ color: '#656b4f' }}> {date}</span>
          {isEdit && (
            <span
              style={{ color: '#656b4f', fontSize: '14px', marginLeft: '10px' }}
            >
              [수정됨]
            </span>
          )}
        </div>
        <div>
          <button
            type="button"
            className="btn btn-secondary"
            id="feedback-btn"
            style={{ marginRight: '15px' }}
            onClick={onEditBtnClick}
          >
            수정
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            id="feedback-btn"
            onClick={onDeleteBtnClick}
          >
            삭제
          </button>
        </div>
      </div>
    </>
  );
}

function nowTime() {
  const now = new Date();
  const formattedDate = `${now.getFullYear()}-${String(
    now.getMonth() + 1
  ).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(
    now.getHours()
  ).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(
    now.getSeconds()
  ).padStart(2, '0')}`;
  return formattedDate;
}
