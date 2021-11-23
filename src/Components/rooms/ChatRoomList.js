import React from 'react'
import { Nav } from 'rsuite'
import RoomItem from './RoomItem'

const ChatRoomList = ({aboveElHEight}) => {
    return (
        <Nav
        appearance="subtle"
        vertical
        reversed
        className="overflow-y-scroll custom-scroll"
        style={{
            height:`calc(100% - ${aboveElHEight}px)`
        }}
        >
            <Nav.Item>
                <RoomItem/>
            </Nav.Item>
        </Nav>
    )
}

export default ChatRoomList
