import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase,{ auth } from '../../firebase/config';
import { useHistory } from 'react-router-dom'

const { Title } = Typography;
const fbProvider=new firebase.auth.FacebookAuthProvider();
function Login() {

    const handleFbLogin=()=>{
        auth.signInWithPopup(fbProvider);
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