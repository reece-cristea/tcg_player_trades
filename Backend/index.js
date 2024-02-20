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
    const selectStatement = "SELECT c.card_id,c.card_name,c.card_picture_url,c.card_quantity,c.featured_card,MIN(ic.individual_card_price) AS min_price,ic.individual_card_condition FROM card c JOIN individual_card ic ON c.card_id = ic.card_id WHERE c.featured_card = true GROUP BY c.card_id,c.card_name,c.card_picture_url,c.card_quantity,c.featured_card,ic.individual_card_condition;"
    db.query(selectStatement, (err,result) => {
        return res.json(result);
    })
})

app.get('/getCategoryData', (req, res) => {
    const selectStatement = "SELECT * FROM tcg_website.categories;"
    db.query(selectStatement, (err,result) => {
        return res.json(result);
    })
})

app.get('/getCardData', (req, res) => {
    const selectStatement = "SELECT * from tcg_website.card;"
    db.query(selectStatement, (err,result) => {
        return res.json(result);
    })
})

app.get('/getSelectedCardData', (req, res) => {
    cardId = req.query["cardId"];
    const selectStatement = `SELECT c.card_id, c.card_name, c.card_picture_url, c.card_text, c.card_attack1, c.card_attack2, c.card_illustrator, c.card_hp, c.card_type, ic.individual_card_quantity, ic.individual_card_condition, ic.individual_card_price, ic.individual_card_quantity, u.uname FROM individual_card ic JOIN card c ON c.card_id = ic.card_id JOIN user u ON ic.card_owner = u.uid WHERE ic.card_id = ${cardId} ORDER BY ic.individual_card_price ASC;`
    db.query(selectStatement, (err,result) => {
        return res.json(result);
    })
})

app.get('/getCardsInCart', (req, res) => {
    cartArray = req.query["cards"];
    const selectStatement = `SELECT c.card_name, c.card_picture_url, ic.individual_card_quantity, ic.individual_card_condition, ic.individual_card_price, u.uname FROM individual_card ic JOIN card c ON c.card_id = ic.card_id JOIN user u ON ic.card_owner = u.uid WHERE ${cartArray.map((cart_item, i) => {
        if (i !== cartArray.length - 1) {
            return `ic.individual_card_id = ${cart_item.individual_card_id} or `
        } else {
            return `ic.individual_card_id = ${cart_item.individual_card_id}`
        }
    }).join('')} ORDER BY ic.individual_card_price ASC;`
    db.query(selectStatement, (err,result) => {
        return res.json(result);
    })
})

app.get('/getCardsInCart', (req, res) => {
    cartArray = req.query["cards"];
    const selectStatement = `SELECT c.card_name, c.card_picture_url, ic.individual_card_quantity, ic.individual_card_condition, ic.individual_card_price, u.uname FROM individual_card ic JOIN card c ON c.card_id = ic.card_id JOIN user u ON ic.card_owner = u.uid WHERE ${cartArray.map((cart_item, i) => {
        if (i !== cartArray.length - 1) {
            return `ic.individual_card_id = ${cart_item.individual_card_id} or `
        } else {
            return `ic.individual_card_id = ${cart_item.individual_card_id}`
        }
    }).join('')} ORDER BY ic.individual_card_price ASC;`
    db.query(selectStatement, (err,result) => {
        return res.json(result);
    })
})

app.get('/getDiffSellers', (req, res) => {
    cartArray = req.query["cards"];
    const selectStatement = `select distinct uname from (SELECT c.card_name, c.card_picture_url, ic.individual_card_quantity, ic.individual_card_condition, ic.individual_card_price, u.uname FROM individual_card ic JOIN card c ON c.card_id = ic.card_id JOIN user u ON ic.card_owner = u.uid WHERE ${cartArray.map((cart_item, i) => {
        if (i !== cartArray.length - 1) {
            return `ic.individual_card_id = ${cart_item.individual_card_id} or `
        } else {
            return `ic.individual_card_id = ${cart_item.individual_card_id}`
        }
    }).join('')} ORDER BY ic.individual_card_price ASC) as t;`
    db.query(selectStatement, (err,result) => {
        return res.json(result);
    })
})

app.listen(3001,() => {
    console.log("running on port 3001");
})