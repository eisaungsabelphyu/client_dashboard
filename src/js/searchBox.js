import axios from 'axios'
export default {
    name: 'SearchBox',
    
    data() {
        return {
            categories: {},
            searchKey: '',
            selectedId: ''
        }
    },
    computed : {
        
        
    },
    methods: {
        getAllCategories() {
            axios.get(`http://localhost:8000/api/categories`)
                .then((res) => {
           
            this.categories = res.data.categories;
                    this.setCategories(res);
         
        })
        .catch((err) => {
          console.error(err);
        })
        },
        search() {
            const data = {
                'searchKey': this.searchKey,
                'categoryId': this.selectedId
            };
            this.$emit('search-event', data);
            this.searchKey = '';
            this.selectedId = '';
        },
        setCategories(res) {
            this.$store.dispatch("setCategoryList", res.data.categories);
        }
        
    },
    mounted() {
        this.getAllCategories();
       
    }
}