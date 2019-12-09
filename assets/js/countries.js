const app = new Vue ({
    el: '#app',
    data: {
        url: "https://restcountries.eu/rest/v2/region/africa",
        countries: []
    },
    methods:{
        fetchCountries: function(){
            fetch(this.url)
            .then((data) =>{
                return data.json()
            })
                .then((res)=>{
                    this.countries = res
                    console.log(this.countries)
               
            })
        
        }
    },
    mounted: function(){
        this.fetchCountries()
    }

})