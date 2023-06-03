<template>
    <div class="d-flex justify-content-between mt-4">
       <div> 
        <span class="border border-light-subtle d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-laptop fs-5 text-info"></i></span>
            <p class="text-center">Computer</p>
            </div>
        <div><span class="border border-light-subtle d-flex justify-content-center align-items-center"><i class="fa-solid fa-mobile-screen-button fs-5 text-info"></i></span><p class="text-center">Phone</p></div>
        <div><span class="border border-light-subtle d-flex justify-content-center align-items-center"><i class="fa-solid fa-house fs-5 text-info"></i></span><p class="text-center">Property</p></div>
        <div><span class="border border-light-subtle d-flex justify-content-center align-items-center"><i class="fa-solid fa-music fs-5 text-info"></i></span><p class="text-center">Music</p></div>
        <div><router-link :to="{path:'/categoryDetail'}"><span class="border border-light-subtle d-flex justify-content-center align-items-center"><i class="fa-solid fa-shirt fs-5 text-info"></i></span><p class="text-center" >Fashions</p></router-link></div>
        <div><span class="border border-light-subtle d-flex justify-content-center align-items-center"><i class="fa-solid fa-gear fs-5 text-info"></i></span><p class="text-center">Service</p></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

    export default {
        name: 'IconBar',
        data(){
            return{
                
            }
        },
        computed:{
            ...mapGetters(['getCategoryList'])
        }
       
    }
</script>

<style  scoped>
    .border{
        width:110px;
        height:110px;
    }
</style>
