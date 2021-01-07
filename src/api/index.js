import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        //const response = await axios.get(url);
        //const {data} = await axios.get(url);
        // const modifiedData = {
        //     confirmed:data.confirmed,
        //     recovered:data.recovered,
        //     deaths:data.deaths,
        //     lastUpdate:data.lastUpdate
        // }

        const {data: {confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
        
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }
        // const modifiedData = {
        //     confirmed:confirmed,
        //     recovered:recovered,
        //     deaths:deaths,
        //     lastUpdate:lastUpdate
        // }

        //console.log(response);
        return modifiedData;
    }catch(error){
        console.log(error);
    }
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
        console.log(countries);
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };