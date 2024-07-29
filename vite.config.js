import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

export default defineConfig({
  plugins: [vue(
      {
        template:{
          compilerOptions:{
            isCustomElement: (tag) => ['wave','SvgIcon'].includes(tag),
          }
        }
      }
  )],

  resolve:{
    alias:{
      '@': path.resolve(__dirname,'./src')   /*设置@ 代替根目录src*/
    }
  }

})
