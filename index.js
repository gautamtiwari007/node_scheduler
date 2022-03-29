import express from 'express';
import schedule from 'node-schedule';

const app = express();

const DUMMY_DATA = [
    {
            "text": "textOne",
            "dateTime": "2022-03-29 19:03:00.000"
    },
    {
            "text": "textTwo",
            "dateTime": "2022-03-29 19:03:10.000"
    },
    {
            "text": "textFinal",
            "dateTime": "2022-03-29 19:03:20.000"
    }
];

const scheduler = (DUMMY_DATA) => {
    DUMMY_DATA.map(el => {
        let date = el.dateTime;
        schedule.scheduleJob(date, function (){
            trigger(el.text);
        });
    });
};

let trigger = async (text) => {
    let length = text.length;
    let promiseArr = [];
    promiseArr.push(await new Promise(resolve => setTimeout(resolve, length*1000)))
    Promise.all(promiseArr);
    console.log(text.split("").reverse().join(""));
};

scheduler(DUMMY_DATA);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});