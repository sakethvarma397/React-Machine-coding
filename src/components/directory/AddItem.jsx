import React, {useRef, useState} from 'react';

function AddItem({onAdd}) {
    const [name, setName] = useState('');
    const [isActive, setIsActive] = useState(false);
    const inputRef = useRef(null);

    const handleClick = () => {
        setName('');
        setIsActive(true);
    }

    const handleSubmit = (e) => {
        if (e.keyCode === 13 && name !== '') {
            onAdd(name);
            setIsActive(false);
        }
    }
    return (
        <div className='add-item'>
            {isActive ? (
                <input
                    ref={inputRef}
                    autoFocus
                    onKeyDown={handleSubmit}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            ): (
                <div onClick={handleClick}>
                    + Add Item
                </div>
            )}
        </div>
    );
}

export default AddItem;
