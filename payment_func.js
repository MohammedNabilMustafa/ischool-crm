
async function payment_AUTH_callAPI(ret_data) {
 
    var result = await payment_AUTH_callAPI_step_1();

    result = JSON.parse(result);

    var result2 = await payment_AUTH_callAPI_step_2(result);

    result2 = JSON.parse(result2);

    var result3 = await payment_AUTH_callAPI_step_3(result2 , result , ret_data);

    result3 = JSON.parse(result3);

    

    // window.open("http://localhost/ischool-crm/success?txn_response_code=0","_self")
    window.open("https://accept.paymob.com/api/acceptance/iframes/213676?payment_token="+result3.token,"_self")
    Loading_page_clear();

}


async function getUserDataWithPromise_1() {
    var xhr = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
     xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status >= 300) {
            reject("Error, status code = " + xhr.status)
          } else {
            resolve(xhr.responseText);
          }
        }
      }
      xhr.open('POST', 'https://accept.paymob.com/api/auth/tokens')
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");

      var data = `{
        "api_key": "ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SndjbTltYVd4bFgzQnJJam80TmpBNUxDSnVZVzFsSWpvaWFXNXBkR2xoYkNJc0ltTnNZWE56SWpvaVRXVnlZMmhoYm5RaWZRLnFvd3o0U1JYUlIzTGo5WkxhcXdySVE0X1BIR3ZiTGliX0huU2w3eEFTWWM0UkljSHBfSFRZcEFfeXVCdmxndDdRM094Z2pBbWhOMnVuNmhoR2cyUnRR"            
        }`;
      xhr.send(data);
    });
  }

async function getUserDataWithPromise_2(data_ret) {
    var xhr = new XMLHttpRequest();


    return new Promise(function(resolve, reject) {
     xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status >= 300) {
            reject("Error, status code = " + xhr.status)
          } else {
            resolve(xhr.responseText);
          }
        }
      }
      xhr.open('POST', 'https://accept.paymob.com/api/ecommerce/orders')
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");

      var data = `{
        "auth_token": "${data_ret.token}"   ,
        "delivery_needed": "false",
        "merchant_id": "${data_ret.profile.id}",
        "amount_cents": "1",
        "currency": "EGP",
        "items": []
            }`;


      xhr.send(data);
    });
  }

async function getUserDataWithPromise_3(data_ret , data_ret2 , ret) {
    var xhr = new XMLHttpRequest();

    return new Promise(function(resolve, reject) {
     xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status >= 300) {
            reject("Error, status code = " + xhr.status)
          } else {
            resolve(xhr.responseText);
          }
        }
      }
      xhr.open('POST', 'https://accept.paymob.com/api/acceptance/payment_keys')
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");

      var data = `{
        "auth_token": "${data_ret2.token}",
        "amount_cents": "${ret.price}", 
        "expiration": 36000, 
        "order_id": ${data_ret.id},
        "billing_data": {
            "apartment": "NA", 
            "email": "${ret.email}", 
            "floor": "NA", 
            "first_name": "${ret.firstname}", 
            "street": "NA", 
            "building": "NA", 
            "phone_number": "${ret.phone}", 
            "shipping_method": "NA", 
            "postal_code": "NA", 
            "city": "NA", 
            "country": "CNAR", 
            "last_name": "${ret.lastname}", 
            "state": "NA"
        }, 
        "currency": "EGP", 
        "integration_id": "1042615"
            }`;


      xhr.send(data);
    });
  }

  async function payment_AUTH_callAPI_step_1() {
    try {
      let user = await getUserDataWithPromise_1()
      return user;
    } catch (err) {
        return err;
    }
  }

  async function payment_AUTH_callAPI_step_2(result) {
    try {
      let user = await getUserDataWithPromise_2(result)
      return user;
    } catch (err) {
        return err;
    }
  }

  async function payment_AUTH_callAPI_step_3(result , result2 , ret) {
    try {
      let user = await getUserDataWithPromise_3(result , result2 , ret)
      return user;
    } catch (err) {
        return err;
    }
  }