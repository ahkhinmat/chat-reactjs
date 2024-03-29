import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase,{ auth, db } from '../../firebase/config';
import { useHistory } from 'react-router-dom'
import { addDocument, generateKeywords } from '../../firebase/services';

const { Title } = Typography;
const fbProvider=new firebase.auth.FacebookAuthProvider();
function Login() {

    const handleFbLogin= async ()=>{
        const { additionalUserInfo, user}=  await auth.signInWithPopup(fbProvider);
        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
              uid: user.uid,
              providerId: additionalUserInfo.providerId,
              keywords: generateKeywords(user.displayName?.toLowerCase()),
            });
          }
    }

    return (
        <div>
            <Row justify="center" style={{height:800}}>
                <Col span={8}>
                    <Title style={{textAlign:'center'}} level={3}>FUN CHAT</Title>
                    <Button style={{width:'100%',marginBottom:5}} onClick={handleFbLogin}>Đăng nhập với FaceBook</Button>
                    <Button style={{width:'100%'}}>Đăng nhập với Google</Button>
                </Col>
            </Row>
        </div>
    );
}

export default Login;