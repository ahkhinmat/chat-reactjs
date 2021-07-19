import { UserAddOutlined } from '@ant-design/icons';
import { Button, Tooltip, Avatar, Form, Input } from 'antd';
import React from 'react';
import styled from 'styled-components';
import Message from './Message';

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
          return (
                    <WrapperStyled>
                              <HeaderStyled>
                                        <div className="header__infor">
                                                  <p className="header__title">Room 1</p>
                                                  <span className="header__description">Mô tả đây là room 1</span>
                                        </div>
                                                  <ButtonGroupStyled>
                                                            <Button    icon={<UserAddOutlined />}
                                                                             type='text'
                                                            >Mời</Button>
                                                            <Avatar.Group size='small' maxCount={2}>
                                                                      <Tooltip title="A">
                                                                                <Avatar >A</Avatar>
                                                                      </Tooltip>
                                                                      <Tooltip title="B">
                                                                                <Avatar >B</Avatar>
                                                                      </Tooltip>
                                                                      <Tooltip title="C">
                                                                                <Avatar >C</Avatar>
                                                                      </Tooltip>
                                                                      <Tooltip title="C">
                                                                                <Avatar >C</Avatar>
                                                                      </Tooltip>
                                                            </Avatar.Group>
                                                  </ButtonGroupStyled>
                              </HeaderStyled>
                              <ContentStyled>
                                        <MessageListStyle>
                                                  <Message text="Test" photoURL={null} displayName="Kha" createAt="2143241242134" />
                                                  <Message text="Test" photoURL={null} displayName="Kha" createAt="2143241242134" />
                                                  <Message text="Test" photoURL={null} displayName="Kha" createAt="2143241242134" />
                                                  <Message text="Test" photoURL={null} displayName="Kha" createAt="2143241242134" />
                                 
                                                
                                        </MessageListStyle>
                                                  <FormStyle>
                                                            <Form.Item>
                                                                      <Input placeholder='nhập tin nhắn' bordered={false} autoComplete='off' />
                                                            </Form.Item>
                                                  </FormStyle>
                                                  <Button type='primary'>
                                                            Gởi
                                                  </Button>
                                    
                              </ContentStyled>
                          
                    </WrapperStyled>
          )
}
