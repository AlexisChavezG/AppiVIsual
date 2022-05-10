
class Servicios{
    static getAllPartners(partners){
        return partners;
    }  
    static getEmailCertification(partners){
        const emailData = partners.filter((item)=>item.haveCertification == true);
        const userMail = emailData.map((explorer) => explorer.email);
        return {"emails" : userMail};
    }
    static credits(partners){
        const credit =  partners.filter((item)=>item.credits > 500);
        return credit;
    }
}
module.exports = Servicios;
