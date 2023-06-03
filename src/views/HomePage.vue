<template>
    <div class="mt-3">
        <search-box @search-event="getSearchData"></search-box>
        <div class="container">
            <h4 class="mt-3 text-muted pl-3">What are you looking for?</h4>
            <icon-bar></icon-bar>
            <h4 class="mt-3 text-muted pl-3">Recent Items</h4>
            <div class="row">
                <div class="col-md-3 mb-3 border-rounded" v-for="(item,index) in itemList" :key="index">
                    <div class="card" style="height:300px;" @click="detail(item.id)">
                        <img v-bind:src="item.image_url" class="card-img-top  object-fit-cover " alt="..." style="height:210px;">
                        <div class="card-body">
                            <div class="d-flex justify-content-between"><h5>{{ item.name }}</h5><span class="text-info">{{ item.condition }}</span></div>
                            <p class="text-info">{{ item.price }}</p>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
        
    </div>
</template>

<script src="../js/homePage.js"></script>
<style scoped>
.active{
   font-weight:bold;
}
</style>


