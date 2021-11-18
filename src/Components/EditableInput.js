import React, { useCallback, useState } from 'react'
import { Alert, Icon, Input, InputGroup } from 'rsuite'

const EditableInput = ({
    initialValue,
    onSave,
    label = null,
    placeholder = "Write your Value",
    emptyMsg = "Input is empty",
    ...inputProps
}) => {

    const [input, setinput] = useState(initialValue)
    const [isEditable, setIsEditable] = useState(false)

    const onInputChange = useCallback((value) => {
        setinput(value)
    }, [])

    const onEditClick = useCallback(() => {
        setIsEditable(edit => !edit);
        setinput(initialValue);
    }, [initialValue])

    const onSaveClick = async() => {
        const trimmed = input.trim();

        if (trimmed === '') {
            Alert.info(emptyMsg, 4000);
            return;
        }

        if (trimmed != initialValue) {
            await onSave(trimmed);
        }

        setIsEditable(false);
    }

    return (
        <div>
            {label}
            <InputGroup>
                <Input {...inputProps} disabled={!isEditable} placeholder={placeholder} value={input} onChange={onInputChange} />
                <InputGroup.Button onClick={onEditClick}>
                    <Icon icon={isEditable ? 'close' : 'edit2'} />
                </InputGroup.Button>
                {isEditable &&
                    <InputGroup.Button onClick={onSaveClick}>
                        <Icon icon='check' />
                    </InputGroup.Button>
                }
            </InputGroup>
        </div>
    )
}

export default EditableInput
