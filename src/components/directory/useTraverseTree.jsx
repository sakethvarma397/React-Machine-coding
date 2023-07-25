
const UseTraverseTree = () => {
    function insertNode(directory, id, item) {
        let newContents;
        if(directory.id === id && directory.isFolder) {
            newContents = [...directory.contents, item];
            return {...directory, contents: newContents};
        }

        if(!directory.isFolder) return directory;

        newContents =  directory.contents.map(tree => insertNode(tree, id, item));
        return {...directory, contents: newContents};
    }


    return {insertNode};
}

export default UseTraverseTree;
