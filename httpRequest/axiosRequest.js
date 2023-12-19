// function for making GET request using axios

const axiosRequest = require('axios');
axiosRequest
    .get('https://www.boredapi.com/api/activity')
    .then(bayag => {
        console.log(`eto ang pwede mong gawin ngayon ${bayag.data.activity}`);
    })
    .catch(kupal => {
        console.log(`this is the ${kupal}`);
    });

////////////////////////////
const errorRequest = require('axios');
errorRequest
    .get('https://httpstat.us/404') //this one for checking error request
    .then(bayag => {
        console.log(`eto ang pwede mong gawin ngayon ${bayag.data.activity}`);
    })
    .catch(kupal => {
        console.log(`eto ang error tingnan mo ${kupal}`);
    });
/////////////////////////////////no need to use .then and .catch if you have try and catch inside async and awatit
const axiosRequested = require('axios');
const getData = async () => {
    try {
        const results = await axiosRequested.get('https://www.boredapi.com/api/activity');
        console.log(`this is the async method ${results.data.activity}`);
    } catch (error) {
        console.log(`this the error ${error}`)
    }
}
getData();
/////////////
let datas = '';
const moreData = require('axios')
const getMoreData = async () => {
    try {
        const result = await moreData.get('https://www.boredapi.com/api/activity');
        datas = result.data.activity;
        console.log(`anooooo ${datas}`)
    } catch (error) {
        console.log(`huwaaaaaatttt ${error}`)
    }
}
getMoreData()
/////////////////////////
const dataShow = require('axios')
const showData = async () => {
    try {
        const result = await dataShow.get('https://www.boredapi.com/api/activity');
        const datas = result.data.activity;
        console.log(`eto ang result ng datus ${datas}`)
    } catch (error) {
        console.log('error:', error);
    }
}
showData();
