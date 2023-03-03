function checklogin(username, password){
    fetch("https://ckf01.millardps.net/ckserver/signin", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin"
        },
        "referrer": "https://ckf01.millardps.net/ck/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"username\":"+username+",\"password\":"+password+"}",
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    });
}
