import axios from 'axios'
import SearchBox from '@/components/SearchBox.vue'
import IconBar from '@/components/IconBar.vue'
    export default {
    components: 
        { 
            SearchBox,
            IconBar 
        },
    name: 'HomePage',
    data() {
        return {
            itemList: {},
            searchKey: '',
            categoryId: '',
            
        }
    },
    computed: {
        
    },
    methods: {
        getItemList() {
            axios.get(`http://localhost:8000/api/items?searchKey=${this.searchKey}&categoryId=${this.categoryId}`)
                .then((res) => {
                    for (let i = 0; i < res.data.items.length; i++){
                        res.data.items[i].image_url = "http://localhost:8000/storage/" + res.data.items[i].image_url;
                       
                    }
                this.itemList = res.data.items;
                    this.setItems(res);    
                    
        })
        .catch((err) => {
          console.error(err);
        })
        },
        getSearchData(data) {
            this.searchKey = data.searchKey;
            this.categoryId = data.categoryId;
            this.getItemList();
        },
        detail(id) {
            
            this.$router.push({
                path: '/detail',
                query: { id: id }
            });
        },
        setItems(res) {
            this.$store.dispatch("setItemList", res.data.items);
            
        }
    },
    mounted() {
        this.getItemList();
    }
}