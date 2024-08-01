<template>
  <div class="landing-page">
    <div class="is-background-image" role="menubar" style="--el-menu-level: 0">

      <div class="el-menu el-menu-horizontal" role="menubar"
           style="--el-menu-level: 0">
        <div class="el-icon" style="width: 50px;height: 50px">

        </div>
        <div>
           <span class="el-menu-item " role="menuitem" tabindex="0">
            <i class="el-icon" style="color: rgba(126, 255, 245,1.0)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path fill="currentColor" d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"></path>
              </svg>
            </i>首页
           </span>
        </div>
        <div class="el-login" style="width: 50px;height: 50px">

        </div>
      </div>


    </div>

  </div>

</template>

<script setup lang="js">
import {reactive, ref} from "vue"
import "@/assets/css/login.css"

const scrollDown = () => {
  window.scrollTo({
    behavior: "smooth",
    top: document.documentElement.clientHeight,
  });
};

</script>
<style lang="scss" scoped>

</style>