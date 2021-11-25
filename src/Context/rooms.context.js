import React, { createContext, useContext, useEffect, useState } from 'react'
import { database } from '../misc/firebase';
import { transformToArrWithId } from '../misc/helpers';

const RoomContext = createContext();


export const RoomProvider = ({ children }) => {

    const [room, setroom] = useState(null)

    useEffect(() => {
        const roomListRef = database.ref('rooms');

        roomListRef.on('value', (snap) => {
            const data = transformToArrWithId(snap.val());
            setroom(data)
        })

        return () => {
            roomListRef.off();
        }
    }, [])

    return <RoomContext.Provider value={room}>{children}</RoomContext.Provider>
}

export const useRooms = ()=>useContext(RoomContext);