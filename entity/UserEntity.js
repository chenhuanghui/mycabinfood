const AirtablePlus = require('airtable-plus');  
const airtableUSER = new AirtablePlus({
    baseID: process.env.AIR_TABLE_BASE_ID_USER,
    apiKey: process.env.AIR_TABLE_API_KEY,
});

class BrandEntity {
    helloWorld = () => {
        console.log("helloworld")
    }

    getUserByID = async(id) => {
        console.log("______ get brand by ID = ", id)    
        
        const user = await airtableUSER.read({
            filterByFormula: `ID = "${id}"`,
            maxRecords: 1
        },{tableName:"User"});
        if (user.length > 0) return user[0].fields
        else return []
    }

    getUserByEmail = async(email)=> {        
        const user = await airtableUSER.read({
            filterByFormula: `email = "${email}"`,
            maxRecords: 1
        },{tableName:"User"});
        if (user.length > 0) return user[0].fields
        else return []
    }
}

module.exports = BrandEntity;