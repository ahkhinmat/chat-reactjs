import { UserAddOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Tooltip, Avatar, Form, Input, Alert } from 'antd';
import Message from './Message';
import AppProvider, { AppContext } from '../../Context/AppProvider';
import { addDocument } from '../../firebase/services';
import { AuthContext } from '../../Context/AuthProvider';
import useFirestore from '../../hooks/useFirestore';
import { formatRelative } from 'date-fns';

const HeaderStyled =styled.div ` 
display: flex;
justify-content: space-between;
height: 56px;
padding: 0 16px;
align-items : center;
border-bottom: 1px solid rgba(230,230,230);
          .header{
                    &__info{
                              display:flex;
                              flex-direction:column;
                              justify-content: center;
                    }
                    &__title{
                              margin:0;
                              font-weight:bold;
                    }
                    &__description{
                              font-size:12px;
                    }
          }

`;
const ContentStyled=styled.div` 
         height : calc(100% - 56px) ;
         display:flex;
         flex-direction: column;
         padding: 11px;
         justify-content: flex-end;
  ` ;

const ButtonGroupStyled=styled.div`
          display:flex;
          align-item: center;

`;
const MessageListStyle=styled.div `
          max-height:100%;
          overflow-y: auto;
`;
const WrapperStyled=styled.div `
height:100vh;       
`;
const FormStyle=styled(Form) `
display: flex;
justify-content:space-between;
align-item: center;
padding: 2px 2px 2px 0;
border: 1px solid rgb(230,230,230);
border-radius:2px;
          .ant-form-item{
                    margin-bottom:0;
                    flex:1;
          }

`;
export default function ChatWindow() {
 const {  selectedRoom,members,setIsInviteMemberVisible } = useContext(AppContext);
const { user: {
  uid,photoURL,displayName
}}=useContext(AuthContext);
 const [form]=Form.useForm();
 const [ inputValue, setInputValue]=useState('');

const handleInputChange = (e) =>{
  setInputValue(e.target.value);
};
const handleOnSubmit = () =>{

  addDocument('message',{
    text: inputValue,
    uid,
    photoURL,
    roomId: selectedRoom.id,
    displayName
  });
  form.resetFields(['message']);
}
const conditon=React.useMemo(() => ({
fieldName: 'roomId',
operator:'==',
compareValue: selectedRoom.id
}), [selectedRoom.id]);

const messages=useFirestore('message',conditon);

console.log({messages});
          return (
                    <WrapperStyled>
                        {
                          selectedRoom.id  ? (<>
                            <HeaderStyled>
                                        <div className="header__infor">
                                                  <p className="header__title">{selectedRoom.name}</p>
                                                  <span className="header__description">{selectedRoom.description}</span>
                                        </div>
                                                  <ButtonGroupStyled>
                                                            <Button    icon={<UserAddOutlined />}
                                                                             type='text'
                                                                             onClick={() => setIsInviteMemberVisible(true)
                                                                             }
                                                            >Mời</Button>
                                                            <Avatar.Group size='small' maxCount={2}>
                                                            {members.map((member) =>(
                                                              <Tooltip title={member.displayName} key={member.id}>
                                                                <Avatar  src={member.photoURL}>
                                                                {member.photoURL
                                                                 ? '' : 
                                                                 member.displayName?.charAt(0)?.toUpperCase()}
                                                                </Avatar>
                                                              </Tooltip>
                                                            ))}
                       
                                                            </Avatar.Group>
                                                  </ButtonGroupStyled>
                              </HeaderStyled>
                              <ContentStyled>
                                        <MessageListStyle>
                                                                  {
                                                                    messages.map( mes=> <Message key={mes.id}
                                                                    text={mes.text} photoURL={mes.photoURL} displayName={mes.displayName} 
                                                                    createAt={(mes.createAt)}
                                                                    />)
                                                                  }
                                        
                                 
                                                
                                        </MessageListStyle>
                                                  <FormStyle form={form}>
                                                            <Form.Item  name="message">
                                                                      <Input 
                                                                      onChange={handleInputChange}
                                                                      onPressEnter={ handleOnSubmit}
                                                                      placeholder='nhập tin nhắn' bordered={false} autoComplete='off'
                                                                       />
                                                            </Form.Item>
                                                  </FormStyle>
                                                  <Button type='primary' onClick={handleOnSubmit}>
                                                            Gởi
                                                  </Button>
                                    
                              </ContentStyled>
                          
                          </>) : <Alert type="info" message="hãy chọn 1 phòng"  showIcon  style={{margin :5}}/>
                        }
                             
                    </WrapperStyled>
          )
}
