const partnersCon = require('./controllers/partnersController')
const express = require("express");
const { response } = require("express");
const { request } = require("http");
const app = express();
app.use(express.json());
const port = 3001;

app.get("/", (request, response) => {
    response.json({message: "Visual partners API!"});
});

app.get("/v1/partners/allPartners",(request,response)=>{
    const read = partnersCon.visualpartners();
    response.json(read);
});
app.get("/v1/partners/emailPartnets",(request,response)=>{
    const emailParnets = partnersCon.getEmailData();
    response.json(emailParnets);

});
app.listen(port, () => {
    console.log(`${port}`);
});