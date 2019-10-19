/**
 * Imports the Roast API URL from the config.
 */
import { ROAST_CONFIG } from '../config.js';

export default {
    /**
     * GET /api/v1/cafes
     */
    getCafes: function(){
        return axios.get( ROAST_CONFIG.API_URL + '/cafes' );
    },
    /**
     * GET /api/v1/cafes/{cafeID}
     */
    getCafe: function( cafeID ){
        return axios.get( ROAST_CONFIG.API_URL + '/cafes/' + cafeID );
    },

    /**
     * POST /api/v1/cafes
     */
    postAddNewCafe: function (name, locations, website, description, roaster, picture) {
        // let formData = new FormData();
        //
        // formData.append('company_name', companyName);
        // formData.append('company_id', companyID);
        // formData.append('company_type', companyType);
        // formData.append('subscription', subscription);
        // formData.append('website', website);
        // formData.append('location_name', locationName);
        // formData.append('address', address);
        // formData.append('city', city);
        // formData.append('state', state);
        // formData.append('zip', zip);
        // formData.append('brew_methods', JSON.stringify(brewMethods));
        // formData.append('matcha', matcha);
        // formData.append('tea', tea);

        return axios.post(ROAST_CONFIG.API_URL + '/cafes',
            {
                name: name,
                locations: locations,
                website: website,
                description: description,
                roaster: roaster,
                picture: picture
            },
            // {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            // }
        );
    },
    /**
     * POST  /api/v1/cafes/{cafeID}/like
     */
    postLikeCafe: function (cafeID) {
        return axios.post(ROAST_CONFIG.API_URL + '/cafes/' + cafeID + '/like');
    },

    /**
     * DELETE /api/v1/cafes/{cafeID}/like
     */
    deleteLikeCafe: function (cafeID) {
        return axios.delete(ROAST_CONFIG.API_URL + '/cafes/' + cafeID + '/like');
    }
}