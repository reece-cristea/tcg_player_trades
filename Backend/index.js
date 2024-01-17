const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tcg_website'
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/getFeaturedCardsData', (req, res) => {
    const selectStatement = "SELECT c.card_id,c.card_name,c.card_picture_url,c.card_quantity,c.category_id,c.featured_card,MIN(ic.individual_card_price) AS min_price,ic.individual_card_condition FROM card c JOIN individual_card ic ON c.card_id = ic.card_id WHERE c.featured_card = true GROUP BY c.card_id,c.card_name,c.card_picture_url,c.card_quantity,c.category_id,c.featured_card,ic.individual_card_condition;"
    db.query(selectStatement, (err,result) => {
        return res.json(result);
    })
})

app.listen(3001,() => {
    console.log("running on port 3001");
})