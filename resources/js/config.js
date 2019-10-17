/**
 * Defines the API route we are using.
 */
var api_url = '';
var gaode_maps_js_api_key = 'f1c1c7f70d846eadc851d3840f937b5e';

switch( process.env.NODE_ENV ){
    case 'development':
        api_url = 'http://homestead.test/api/v1';
        break;
    case 'production':
        api_url = 'http://homestead.demo.laravelacademy.org/api/v1';
        break;
}

export const ROAST_CONFIG = {
    API_URL: api_url,
    GAODE_MAPS_JS_API_KEY: gaode_maps_js_api_key,
}