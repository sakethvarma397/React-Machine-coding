import React, {useState} from 'react';
import Folder from "./Folder.jsx";
import File from "./File.jsx";
import AddItem from "./AddItem.jsx";
import {uuid4 as v4} from "uuid4";
import useTraverseTree from "./useTraverseTree.jsx";

const initialStructure = {
    id: '0',
    name:'Root',
    isFolder: true,
    contents: [
        {
            id: '1',
            isFolder: true,
            name: 'Folder1',
            contents:[
                {id:v4(), name: 'Sample.txt', isFolder: false},
                {id:v4(), name: 'Hello.txt', isFolder: false},
                {id:v4(), name: 'World.txt', isFolder: false},
            ]
        },
        {
            id: '2',
            isFolder: true,
            name: 'Folder2',
            contents:[
                {id:v4(), name: 'Sample.txt', isFolder: false},
                {id:v4(), name: 'Hello.txt', isFolder: false},
                {id:v4(), name: 'World.txt', isFolder: false},
            ]
        },
        {id:'3', name: 'Sample.txt', isFolder: false},
    ],
};

function Index() {
    const [directory, setDirectory] = useState(initialStructure);
    const {insertNode} = useTraverseTree();
    const addItem = (name, parentId) => {
        const isFolder = name.split('.').length === 1;
        const newItem = isFolder
            ? {id: v4(), name: name, isFolder, contents:[] }
            : {id:v4(), name: name, isFolder};

        const newDirectory = insertNode(directory, parentId, newItem);
        setDirectory(newDirectory);
    }

    return (
        <div className='directory-container'>
            <Folder key={directory.id} {...directory} addItem={addItem} />
        </div>
    );
}

export default Index;
