import React,{memo} from 'react'
import { useCurrentRoom } from '../../../Context/current-room.context'

const Top = () => {

    const name = useCurrentRoom(v=>v.name)
    return (
        <div>
            {name}
        </div>
    )
}

export default memo(Top);
