const axios = require('axios');
const fs = require('fs');

const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

axios.get(url)
    .then(response => {
        const data = response.data;
        const rates = [];

        for (let currency in data.Valute) {
            rates.push({
                currency: data.Valute[currency].Name,
                charCode: data.Valute[currency].CharCode,
                value: data.Valute[currency].Value
            });
        }

        fs.writeFileSync('cbr_rates.json', JSON.stringify(rates, null, 2));
        console.log(`Сохранено ${rates.length} курсов валют`);
        console.log(rates.slice(0, 5)); // покажем первые 5
    })
    .catch(error => {
        console.error('Ошибка:', error.message);
    });