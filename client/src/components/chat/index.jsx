import React from 'react'
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced'
import CustomHeader from "../customHeader"
import StandardMessageForm from '../customMessageForm/standardMessageForm'
import Ai from '../customMessageForm/Ai'

const Chat = () => {

    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "testUser#1",
        "#1"
    )
    console.log(chatProps);
    return <div style={{ flexBasis: "100%" }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps}
            style={{ height: "100vh" }}
            renderChatHeader={(chat) => <CustomHeader chat={chat} />} 
            
            renderMessageForm={(props)=>{
                if (chatProps.chat?.title.startsWith("AiChat_")) {
                    return <Ai props={props} activeChat={chatProps.chat} />
                }
                return(
                    <StandardMessageForm props={props} activeChat = {chatProps.chat}/>
                )
            }} />
    </div>

}

export default Chat