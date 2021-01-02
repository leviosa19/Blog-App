import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_BlogPost':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ]

        case 'delete_BlogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload)

        case 'edit_BlogPost': 
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost 
            })

        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_BlogPost', payload: { title, content } })
        if (callback) {
            callback()
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_BlogPost', payload: id })
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_BlogPost', payload: { id, title, content } })
        if (callback) {
            callback()
        }
    }
}

export const { Context, Provider } = createDataContext(
                                            blogReducer, 
                                            { addBlogPost, deleteBlogPost, editBlogPost }, 
                                            []      // initial empty array
                                    )