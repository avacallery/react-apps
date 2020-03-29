//anything to do with posts are going in here

export const deletePost = (id) => {
    return {
        type: 'DELETE_POST', 
        id: id 
    }
}
