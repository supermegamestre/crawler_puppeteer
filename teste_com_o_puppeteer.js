const pup = require("puppeteer");
const readline = require('readline');

const url = "https://batata.com.br";
const login = "batata";
const password = "cozida";

//se precisar de input...
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};
(async () => {
    const broswer = await pup.launch();
    const page = await broswer.newPage();
    await page.goto(url);

    rl.close();
    await page.waitForSelector('#login-edit');      //insert caixa de login aq
    await page.type('#login-edit', login);
    await page.waitForSelector('#password-edit');   //insert caixa de senha aq
    await page.type('#password-edit', password);
    await page.click('.login-btn');                 //insert botão de login aq


    //insert api pra pegar um json aq?...

})();
