import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    {
        id : 1,
        title : '메모(1)',
        content : '미리 작성한 메모입니다1'
    },
    {
        id : 2,
        title : '메모(2)',
        content : '미리 작성한 메모입니다2'
    },
]

const memoSlice = createSlice({
    name : 'memos',
    initialState,
    reducers : {
        memoAdded : {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title,content) {
                return {
                    payload : {
                        id : nanoid(),
                        title,
                        content
                    }
                }
            
            }
        },
        memoRemoved(state,action){
            // console.log(action.payload)
            const memoId = action.payload;
            return state = state.filter(item => item.id !== memoId)
        }
    }    
})


export const { memoAdded, memoRemoved } = memoSlice.actions;
export default memoSlice.reducer;