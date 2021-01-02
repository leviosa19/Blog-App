import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'delete_BlogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload)

        case 'edit_BlogPost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost
            })

        case 'get_BlogPost':
            return action.payload

        default:
            return state
    }
}

const getBlogPost = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts')
        // response.data === [{}, {}, {}, .....]

        dispatch({ type: 'get_BlogPost', payload: response.data })
    }
}

const addBlogPost = () => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content })
        if (callback) {
            callback()
        }
    }
}

const deleteBlogPost = () => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({ type: 'delete_BlogPost', payload: id })
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        
        await jsonServer.put(`/blogposts/${id}`, { title, content })

        dispatch({ type: 'edit_BlogPost', payload: { id, title, content } })
        if (callback) {
            callback()
        }
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
    []      // initial empty array
)