import { createSlice } from '@reduxjs/toolkit'

export const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: []
  },
  reducers: {
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload];
    },
    removeNote: (state, action) => {
        const newNotes = state.notes.filter(n => n.id !== action.payload);
        state.notes = newNotes;
    },
    editNote: (state, action) => {
      const newNotes = state.notes.filter(n => n.id !== action.payload.id)
      const editedNote = state.notes.find(n => n.id === action.payload.id)
      editedNote.title = action.payload.title
      editedNote.text = action.payload.text
      state.notes = [...newNotes, editedNote]
    }
  }
})

export const { addNote, removeNote, editNote } = noteSlice.actions

export default noteSlice.reducer