<template>  
  <div class="container-fluid mt-2">
       <nav class="nav">
            <router-link class="nav-link" aria-current="page" :to="{path : '/'}" v-if="$route.path === '/detail'" >
                Home
            &emsp;<i class="fa-solid fa-chevron-right"></i>
             </router-link>
            <router-link class="nav-link " aria-current="page" :to="{path: '/categoryDetail'}" v-if="$route.path === '/detail'">
                {{item.category}}
                &emsp;<i class="fa-solid fa-chevron-right"></i>
            </router-link>
            <router-link class="nav-link active" aria-current="page" :to="{path: '/detail'}" v-if="$route.path === '/detail'">
                {{item.name}}
            </router-link>
        </nav>
        <div class="text-center" style="height:250px;">
            <img :src="item.image_url" style="height:100%;">
        </div>
        <div class="container mt-5">
            <div class="row d-flex justify-content-between">
                <div class="col-md-5">
                    <div class="mb-3">
                        <h4>{{item.name}}</h4>
                        <p class="text-info">{{item.price}}</p>
                    </div>
                    <div class="d-flex justify-content-around mb-3">
                        <ul>
                            <li><span>Type</span></li>
                            <li><span class="badge bg-danger-subtle text-danger">{{item.type}}</span></li>
                        </ul>
                        <ul>
                            <li><span>Condition</span></li>
                            <li><span class="badge bg-primary-subtle text-primary">{{item.condition}}</span></li>
                        </ul>
                        <ul>
                            <li><span>Status</span></li>
                            <li><span class="badge bg-success-subtle text-success">{{item.status}}</span></li>
                        </ul>
                    </div>
                    <div class="mb-3">
                        <h5 class="fw-bold">Heidhlighted Information</h5>
                        <p> Try a quick search to explore hundreds of affordable options.</p>
                    </div>
                    <div class="mb-3">
                        <h5>Product Description</h5>
                        <p>{{item.description}}</p>
                    </div>
                    <div class="mb-3">
                        <h5>Owner Information</h5>
                        <div>
                            <p class="mb-1">Contact Number</p>
                            <p>+95 {{item.phone}}</p>
                        </div>
                    </div>
                    <div>
                        <h6>{{item.owner_name}}</h6>
                        <p>{{item.address}}</p>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="mb-3">
                        <h5>Location</h5>
                        <p>{{item.address}}</p>
                    </div>
                    <div style="height:420px;">
                        <l-map ref="map" :zoom="zoom" :center="mapCenter" :options="mapOptions">
                        <l-tile-layer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            layer-type="base"
                            name="OpenStreetMap"
                        ></l-tile-layer>
                        <l-marker :lat-lng="markerLatLng"></l-marker>
                        </l-map>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../js/detailPage.js"></script>

<style scoped>
.active{
    font-weight:bold;
}
</style>
