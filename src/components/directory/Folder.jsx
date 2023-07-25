import React from 'react';
import {AiOutlineFolder} from 'react-icons/ai';
import File from "./File.jsx";
import AddItem from "./AddItem.jsx";


function Folder({name, contents, id, addItem}) {
    const handleAdd = (name) => {
        addItem(name, id);
    }
    return (
        <div className='folder'>
            <div className='title'>
                <AiOutlineFolder />
                <span>{name}</span>
            </div>
           <div className='content'>
               {contents.map(item =>  item.isFolder
                   ? (<Folder key={item.id} {...item} addItem={addItem}  />)
                   : (<File key={item.id} {...item} />)
               )}
               <AddItem id={id} onAdd={handleAdd}/>
           </div>
        </div>
    );
}

export default Folder;
