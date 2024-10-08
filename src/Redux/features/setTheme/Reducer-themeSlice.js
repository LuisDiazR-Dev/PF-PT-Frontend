import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   theme: localStorage.getItem('theme') || 'light',
}

const themeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      toggleTheme: (state) => {
         state.theme = state.theme === 'light' ? 'dark' : 'light'
         localStorage.setItem('theme', state.theme)

         // Cambiar la clase en el <html> o <body>
         if (state.theme === 'dark') {
            document.documentElement.classList.add('dark')
         } else {
            document.documentElement.classList.remove('dark')
         }
      },
   },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer