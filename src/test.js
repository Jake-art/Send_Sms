import axios from "axios";

const Test = ()=>{
    let data = JSON.stringify({
      "SenderId": "Mobitext",
      "MessageParameters": [
        {
          "Number": "254722352740",
          "Text": "moses"
        }
      ],
      "ApiKey": "zpEdD5mAa6itV2YhC4lrZc8e1LMwuxPFn9vB0b3G7UJkgoKj",
      "ClientId": "Jake"
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://apis.onfonmedia.co.ke/v1/sms/SendBulkSMS',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}
export default Test