import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'font-awesome/css/font-awesome.min.css';
import Picker from '@emoji-mart/react'
import ReactHtmlParser from 'react-html-parser';
import './ChatRoom.css'
import { v4 as uuidv4 } from 'uuid';

const ChartDesign = () => {
    const [message, setMessage] = useState('');
    // const [messages, setMessages] = useState([]);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [users] = useState(['durgesh singh', 'ramesh', 'sohan','rohan','suresh'])
    const [selectedUser, setSelectedUser] = useState(null);
    const [yourMessages, setYourMessages] = useState([]);
    const [rajeshMessages, setRajeshMessages] = useState([]);

    const handleEmojiButtonClick = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };
    const handleEmojiSelect = (emoji) => {
        setMessage(message + emoji.native || emoji);
        setShowEmojiPicker(false);
    };
    const rajeshResponses = [
        {
            key: "hello",
            message: "Hello! I'm good. What about you?"
        },
        {
            key: "bye",
            message: "bye!"
        },
        {
            key: "how are you",
            message: "I'm fine."
        },
        {
            key: "good morning friend",
            message: "I am also good morning"
        },
        {
            key: "good morning ",
            message: "good morning"
        },
        {
            key: "how was the day",
            message: "It is very good ."
        },
        {
            key: "how was the day",
            message: "It is very good ."
        },
        {
            key: "we are having a work",
            message: "what type of work you have please tell I will do that ."
        },
        {
            key:"thankyou👍",
            message:"you are welcome 😀"
        }
    ];

    const removeHtmlTags = (input) => {
        return input.replace(/<[^>]*>?/gm, ''); // Remove HTML tags using regex
      };
      
      const getRandomRajeshResponse = (userMessage) => {
        const cleanedUserMessage = removeHtmlTags(userMessage).toLowerCase();
        const response = rajeshResponses.find((item) => item.key === cleanedUserMessage);
        
        return response ? response.message : "I have not understand your question ..";
      };
      
    const handleSendMessage = () => {
        if (message) {
            const userMessage = message.trim().toLowerCase();
            const newMessage = {
                id: uuidv4(),
                text: message,
                sender: 'You',
            };
            setYourMessages([...yourMessages, newMessage]);
            setMessage('');

            setTimeout(() => {
                
                const rajeshMessage = getRandomRajeshResponse(userMessage);
                if (rajeshMessage) {
                    const newRajeshMessage = {
                        id: uuidv4(),
                        text: rajeshMessage,
                    };
                    setRajeshMessages([...rajeshMessages, newRajeshMessage]);
                    
                }
            }, 2000); 
        }
    };
    
    return (
        <main className="content">
            <div className="container p-0">

                <h1 className="h3 mb-3 text-center">Messages</h1>

                <div className="card">
                    <div className="row g-0">
                        <div className="col-12 col-lg-5 col-xl-3 border-right">

                            <div className="px-4 d-none d-md-block">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        <input type="text" className="form-control my-3" placeholder="Search..." />
                                    </div>
                                </div>
                            </div>
                            {users.map((user) => (
                                <button className="list-group-item list-group-item-action border-0 "
                                    onClick={() => setSelectedUser(user)}>
                                    <div className="badge bg-success ">5</div>
                                    <div className="d-flex align-items-start">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40" />
                                        <div className="flex-grow-1 ml-3 text-capitalize">
                                            {user}
                                            <div className="small"> Online</div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                            <hr className="d-block d-lg-none mt-1 mb-0" />
                        </div>
                        <div className="col-12 col-lg-7 col-xl-9">
                            <div className="py-2 px-4 border-bottom d-none d-lg-block">
                                <div className="d-flex align-items-center py-1">
                                    <div className="position-relative">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                    </div>
                                    <div className="flex-grow-1 pl-3">
                                        {selectedUser ? (
                                            <strong className='text-capitalize'>{selectedUser}</strong> 
                                        ) : (
                                            <strong className='text-capitalize'>Rajesh</strong> 
                                        )}
                                        
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-lg" style={{ marginRight: '5px' }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone feather-lg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></button>
                                        <button className="btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block" style={{ marginRight: '5px' }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-video feather-lg"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></button>
                                        <button className="btn btn-light border btn-lg px-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-horizontal feather-lg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
                                    </div>
                                </div>
                            </div>

                            <div className="position-relative">
                                <div className="chat-messages p-4">
                                    <div className="chat-message-right pb-4">
                                        <div>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                            <div className="text-muted small text-nowrap mt-2">2:33 am</div>
                                        </div>
                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                            <div className="font-weight-bold mb-1">You</div>

                                            <div className="message-list">
                                                hello friends
                                            </div>
                                        </div>
                                    </div>

                                    <div className="chat-message-left pb-4">
                                        <div>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40" />
                                            <div className="text-muted small text-nowrap mt-2">2:34 am</div>
                                        </div>
                                        <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3 text-capitalize">
                                            {selectedUser ? (<div className="font-weight-bold mb-1">{selectedUser}</div>)
                                                : (<div className="font-weight-bold mb-1">Rajesh</div>)}
                                            I am good friend 
                                        </div>
                                    </div>

                                    {yourMessages.map((msg) => (
                                        <div key={msg.id}
                                            className={msg.sender === 'You' ? 'chat-message-right mb-4' : 'chat-message-left pb-4'}>
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                                <div className="text-muted small text-nowrap mt-2">2:35 am</div>
                                            </div>
                                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                                <div className="font-weight-bold mb-1">You</div>
                                                <div key={msg.id} className="message">
                                                    {ReactHtmlParser(msg.text)}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {rajeshMessages.map((msg) => (
                                        <div key={msg.id}
                                            className={msg.sender === 'You' ? 'chat-message-right mb-4' : 'chat-message-left pb-4'}>
                                            <div>
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40" />
                                                <div className="text-muted small text-nowrap mt-2">2:35 am</div>
                                            </div>
                                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                                            <div className="font-weight-bold mb-1 text-capitalize">{selectedUser ? selectedUser: "Rajesh" }</div>
                                                    <div className="message">{msg.text}</div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="message-input">
                                <ReactQuill
                                    value={message}
                                    onChange={setMessage}
                                    placeholder="Type your message..."
                                    modules={{
                                        toolbar: [
                                            ['bold', 'italic', 'strike'],
                                            ['link'],
                                            [{ list: 'bullet' }, { list: 'ordered' }], 
                                            ['blockquote'], 
                                            ['code'], 
                                        ],
                                    }}
                                />
                                {/* Additional features with icons */}
                                <div className="back-toolbar">
                                    <div className="message-button">
                                        <div className="message-features">
                                            <label >
                                                <i className="fa fa-plus-square-o upload " aria-hidden="true"></i>
                                                <input id="file-upload" type="file" accept="image/*" className='file' />
                                            </label>
                                            <button className='emoji' onClick={handleEmojiButtonClick}>
                                                <i className="fa fa-smile-o"></i>
                                            </button>
                                        </div>

                                        <button className='btn btn-success send' onClick={handleSendMessage}><i className="fa fa-paper-plane" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                    {showEmojiPicker && (
                                        <Picker onEmojiSelect={(emoji) => handleEmojiSelect(emoji)} set="apple" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ChartDesign
