<template>
  <div class="landing-page">

      <div class="el-menu el-menu-horizontal" role="menubar"
           style="--el-menu-level: 0">
           <span class="el-menu-item " role="menuitem" tabindex="0" >
            <i class="el-icon" style="color: rgba(126, 255, 245,1.0)" >
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <path fill="currentColor" d="M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"></path>
              </svg>
            </i>首页
        </span>

        <div  class="el-sub-menu" role="menuitem" ariahaspopup="true" aria-expanded="false" tabindex="0"
              style="background-color: rgba(248, 249, 250, 0.4)">
          <span class="el-sub-menu__title el-tooltip__trigger el-tooltip__trigger"><i data-v-ae089293=""
                                                                                     class="el-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path fill="currentColor"
                    d="M128 384v448h768V384zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32m64-128h704v64H160zm96-128h512v64H256z"></path>
            </svg>
          </i> 归档 <i class="el-icon el-sub-menu__icon-arrow"
                       style="transform: none ; background-color: rgba(248, 249, 250, 0.4)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path fill="currentColor"
                    d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path>
            </svg>
          </i>
          </span>
        </div>


      </div>
    </div>
  <div class="text">

    Loremn ipsumn dolor sit amet, consectetur adipisicing ehit. Porro quae minus veniar mumnqunm, ea
    perferendis ratione quaerat! lusto vitae corporis officiis distinctio saepe feiciendis tenerur earosn. q es.
    necessitatbus ventatis
    Eveniet vel blandrtis masume consectetur iste voluptatibus autem quasi susciprt pariatur doloremque hac
    secui ab quidem necessitatibus laboriosam eius tempora cumnque aliguid sint. expedita vero remn perferendis
    quos. Laudantrumn, facere
    Repellendus. amet Expedita vertatis hic nostrum accusantiom ad voluptater earum debits quod laborum
    consequatus, beatae,illo biandinis incidunt dignissimos etlaudantimn dicta ullam. Etcurque molestias

  </div>

</template>

<script setup>
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