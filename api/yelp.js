import axios from 'axios'


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer bDb4vSlH-arQFQpsOd52RbKh_ECUNtFhQUh94pWY6me44z6ca5Bl54ugjR9iGs_xSJ-Kvb_MYNkhycHUeYogj0t6DZNr4Ax4wZ3CiKhlEeb6R3ddDiugcam_qMBEZnYx'
    }

})