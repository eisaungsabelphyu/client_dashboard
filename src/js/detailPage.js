import axios from 'axios'
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
    name: 'DetailPage',
   components: {
    LMap,
    LTileLayer,
    LMarker
  },
    data() {
        return {
            itemId: 0,
            item: {},
            zoom:10,
            lat: null,
            long:null,
            mapOptions: {
                zoomControl: false,
                dragging: false
            
            }
        }
    },
    computed: {
        mapCenter() {
            if (this.lat && this.long) {
                return [this.lat, this.long];
            }
            return [18.208,96.482];
        },
        markerLatLng() {
            if (this.lat && this.long) {
                return [this.lat, this.long];
            }
            return [18.208,96.482];
        },
       
    },
    methods: {
        getDetailItem(id) {
            axios.post("http://localhost:8000/api/items/detail", {
                    itemId: id
                })
                .then((res) => {
                    res.data.item.description = res.data.item.description.replace(/<\/?[^>]+(>|$)/g, '');
                    res.data.item.image_url = "http://localhost:8000/storage/" + res.data.item.image_url;
                    if (res.data.item.status == 1) {
                        res.data.item.status = 'Available';
                    } else {
                        res.data.item.status = 'Unavailable';
                    }
                    
                    let latlong = res.data.item.lat_long.split(",");
                    
                    const latitude = latlong[0]*1;
                    const longitude = latlong[1] * 1;
                    this.lat = latitude;
                    this.long = longitude;
                    this.item = res.data.item;
                })
                .catch((err) => {
                    console.error(err);
                })
        },
    },
    mounted() {
        this.itemId = this.$route.query.id;
        this.getDetailItem(this.itemId);
       
    }
    }