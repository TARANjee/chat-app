import React, { useEffect, useRef, useState } from 'react'
import { Divider } from 'rsuite'
import CreateRoomBtnModal from './dashboard/CreateRoomBtnModal'
import DashboardToggle from './dashboard/DashboardToggle'
import ChatRoomList from './rooms/ChatRoomList'

const Sidebar = () => {
    const topSideRef = useRef();
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (topSideRef.current) {
            setHeight(topSideRef.current.scrollHeight);
        }
    }, [topSideRef])

    return (
        <div className="h-100 pt-2">
            <div ref={topSideRef}>
                <DashboardToggle />
                <CreateRoomBtnModal />
                <Divider>Join Conversations</Divider>
            </div>
            <ChatRoomList aboveElHEight={height} />
        </div>
    )
}

export default Sidebar
