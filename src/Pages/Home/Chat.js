import React from 'react'
import { useParams } from 'react-router'
import { Loader } from 'rsuite'
import Bottom from '../../Components/chat-window/bottom'
import Messages from '../../Components/chat-window/messages'
import Top from '../../Components/chat-window/top'
import { CurrentRoomProvider } from '../../Context/current-room.context'
import { useRooms } from '../../Context/rooms.context'

const Chat = () => {

    const { chatId } = useParams();
    const rooms = useRooms();

    if (!rooms) {
        return <Loader center vertical size="md" content="Loading " speed="slow" />
    }

    const currentRoom = rooms.find(room => room.id === chatId);

    if (!currentRoom) {
        return <h6 className="text-center mt-page">Chat {chatId} not found</h6>
    }

    const {name,description} = currentRoom;

    const currentRoomData = {
        name,
        description,
    };
    return (
        <CurrentRoomProvider data={currentRoomData}>
            <div className="chat-top">
                <Top />
            </div>
            <div className="chat-middle">
                <Messages />
            </div>
            <div className="chat-bottom">
                <Bottom />
            </div>
        </CurrentRoomProvider>
    )
}

export default Chat
