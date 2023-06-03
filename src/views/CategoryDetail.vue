<template>
    <div class="container-fluid mt-2">
        <nav class="nav">
            <router-link class="nav-link" aria-current="page" :to="{path : '/'}"  >
                Home
            &emsp;<i class="fa-solid fa-chevron-right"></i>
             </router-link>
            <router-link class="nav-link " aria-current="page" :to="{path: '/categoryDetail'}" >
               Category
                
            </router-link>
            
        </nav>
       <div class="container">
             <div class="row d-flex justify-content-between mt-5">
            <div class="col-md-5">
                <div class="mb-3 d-flex justify-content-between">
                    <h5>Filter By</h5>
                    <h5 class="text-danger">Clear Filter</h5>
                </div>
                <div class="mb-3">
                    <h6>Sorting</h6>
                    <div class="d-flex justify-content-between">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
                            <label class="form-check-label fw-bold" for="flexRadioDefault1">
                                Latest
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
                            <label class="form-check-label fw-bold" for="flexRadioDefault2">
                                Popular
                            </label>
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label fw-bold">Item Name</label>
                        <input type="text" class="form-control " id="exampleFormControlInput1" placeholder="Input Name" v-model="searchKey">
                </div>
                <div class="mb-3 d-flex justify-content-between">
                    <button type="button" class="btn btn-outline-dark bg-light text-muted">Min</button>
                    <button type="button" class="btn btn-outline-dark bg-light text-muted">Max</button>
                </div>
                <div class="form-group mb-3">
                    <label class="fw-bold">Category</label>
                    <select v-model="selectedId" class="form-select">
                        <option disabled value="">Choose one</option>
                        <option v-for="(cat,index) in getCategoryList" :key="index" :value="cat.id">{{cat.name}}</option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label class="fw-bold">Item Condition</label>
                    <select class="form-select">
                        <option disabled value="">Choose one</option>
                        <option></option>
                    </select>
                </div>
                <div class="form-group mb-3">
                    <label class="fw-bold">Type</label>
                    <select class="form-select">
                        <option disabled value="">Choose one</option>
                        <option></option>
                    </select>
                </div>
                <div class="mt-3 mb-5 text-center">
                    <button class="btn btn-primary" @click="filter()">Apply Filter</button>
                </div>
            </div>
            <div class="col-md-6">
                <div class="row justify-content-between">
                    <div class="col-md-4 mb-3 border-rounded"  v-for="(item,index) in getItemList" :key="index">
                        <div class="card" style="height:250px;" >
                            <img v-bind:src="item.image_url" class="card-img-top  object-fit-cover " alt="..." style="height:200px;">
                            <div class="card-body">
                                <div class="d-flex justify-content-between"><h5>{{ item.name }}</h5><span class="text-info">{{ item.condition }}</span></div>
                                <p class="text-info">{{ item.price }}</p>
                            </div>
                        </div>
                    </div>  
                    
                </div>
            </div>
        </div>
       </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name: 'CategoryDetail',
        data(){
            return{
                items: {},
                searchKey: '',
                selectedId: ''
            }
        },
        computed:{
            ...mapGetters(['getItemList','getCategoryList'])
        },
        
    }
</script>

<style lang="stylus" scoped>

</style>
