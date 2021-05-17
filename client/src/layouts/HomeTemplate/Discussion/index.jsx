import React, { useEffect, useRef, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import bodyLinear from './../../../assets/linearGradient.png';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useStyles } from './styles';
import { Box, Button, Typography } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

firebase.initializeApp({
  apiKey: 'AIzaSyCw8k1hNqDdseMcdGuR_aM6xu7iun5ZDBY',
  authDomain: 'fptblog-15345.firebaseapp.com',
  projectId: 'fptblog-15345',
  storageBucket: 'fptblog-15345.appspot.com',
  messagingSenderId: '1015279904154',
  appId: '1:1015279904154:web:61c1b5bf9d30ee96820623',
  measurementId: 'G-ZW4MF4BW8X',
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function SignIn() {
  const classes = useStyles();
  const signInWithGoogle = () => {
    // Chọn đăng nhập với google (firebase phải enable)
    const provider = new firebase.auth.GoogleAuthProvider();
    // Sau khi chọn thì add vào (mở bằng Popup window)
    auth.signInWithPopup(provider);
  };
  return (
    <Button
      color="primary"
      className={classes.buttonLogin}
      onClick={signInWithGoogle}
    >
      Login with Google
    </Button>
  );
}

function SignOut() {
  const classes = useStyles();
  return (
    <button onClick={() => auth.signOut()} className={classes.signOutContainer}>
      <FontAwesomeIcon icon={faSignOutAlt} className={classes.buttonSignOut} />
    </button>
  );
}

function ChatRoom({ user }) {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  // Gắn với thẻ span dưới cùng để ScrollIntoView
  const dummy = useRef();
  const classes = useStyles();
  // Lưu tin nhắn
  const [formValue, setFormValue] = useState('');
  // Chọn collection trên firebase
  const messageRef = firestore.collection('messages');
  // Sắp xếp
  const query = messageRef.orderBy('createdAt', 'asc').limitToLast(25);
  // Vì trả về là 1 mảng ([[], true, undefined])
  // nên lấy ra truthy (array, object)
  const [messages] = useCollectionData(query, { idField: 'id' });

  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };
  // Observable
  useEffect(scrollToBottom, [formValue]);
  useEffect(scrollToBottom, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    // Lấy ra từ thằng auth đặt ở dòng 23 (chưa có login)
    // thì trả về null
    if (auth.currentUser) {
      const { displayName, uid, photoURL } = auth.currentUser;
      // Push lên firebase
      await messageRef.add({
        user: displayName,
        body: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid: uid,
        photoURL: photoURL,
      });
      // Thành công thì xoá form
      setFormValue('');
    }
  };
  return (
    <div className={classes.bigContainer}>
      <div
        className={classes.container}
        style={{
          height: `${!isMobile ? 60 : 75}vh`,
        }}
      >
        {messages &&
          messages.map((message) => {
            return <ChatMessage key={message.id} message={message} />;
          })}
        <span ref={dummy}></span>
      </div>
      <div className={classes.containerComment}>
        {user ? (
          <div>
            <form onSubmit={sendMessage}>
              <div className={classes.inputContainer}>
                <input
                  className={classes.input}
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                  placeholder="Nói gì đi..."
                />
                <div className={classes.containerIcon}>
                  <button
                    className={classes.button}
                    type="submit"
                    disabled={!formValue}
                  >
                    <SendIcon className={classes.iconSend} />
                  </button>
                </div>
              </div>
            </form>
            <SignOut />
          </div>
        ) : (
          <div
            className={classes.inputContainer}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <SignIn />
          </div>
        )}
      </div>
    </div>
  );
}

function ChatMessage(props) {
  const classes = useStyles();
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const { user, body, uid, photoURL, createdAt } = props.message;
  console.log(props.message);
  // Kiểm tra cái nào của client cái nào của other users
  let messageClass = false;
  if (props.message && auth.currentUser) {
    messageClass = uid === auth?.currentUser.uid;
  }
  console.log(messageClass);
  return (
    <div
      className={`${
        messageClass ? classes.allMeContainer : classes.allContainer
      }`}
    >
      <img src={photoURL || 'https://i.imgur.com/rFbS5ms.png'} />
      <div className={classes.nameTextContainer}>
        <p className={classes.name}>{messageClass ? 'You' : user}</p>
        <div
          className={`${classes.bodyContainer} ${
            !isMobile ? `linear-body` : `linear-body-phone`
          }`}
          style={{
            maxWidth: `${!isMobile ? 400 : 200}px`,
          }}
        >
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}

const Discussion = () => {
  const classes = useStyles();
  const [user] = useAuthState(auth);
  return (
    <div>
      <ChatRoom user={user} />
    </div>
  );
};

export default Discussion;
