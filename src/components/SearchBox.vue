<template>
   
        <div class="row ">
            <div class="col-md-6 search-box  mx-auto">
                <div class="input-group mb-3" >
                    <input type="text" class="form-control border-light bg-light"
                     placeholder="Search"
                    aria-describedby="basic-addon2" v-model="searchKey" >
                    <select v-model="selectedId" class="custom-select bg-light border-light">
                        <option disabled value="">Category</option>
                        <option v-for="(cat,index) in categories" :key="index" :value="cat.id">
                            {{cat.name}}
                        </option>
                    </select>
                    <button class="btn btn-info" @click="search()">Search</button>
                </div>
              
            </div>
        </div> 
    
</template>

<script src="../js/searchBox.js"></script>
<style scoped>
    /* .custom-select{
      height: 30px;
      padding: 0.375rem 1.25rem;
      font-size: 0.875rem;
    } */
</style>>




