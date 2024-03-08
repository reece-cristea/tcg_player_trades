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

app.get('/getCurrUserCart', (req, res) => {
    currUserId = req.query["currUser"];
    const selectStatement = `select t1.cart_id, t1.cart_uid, t1.cart_item_id, t1.cart_item_quantity, t1.individual_card_id, t2.card_name, t2.card_picture_url, t2.individual_card_quantity, t2.individual_card_condition, t2.individual_card_price, t2.uname from (SELECT sc.cart_id, sc.cart_uid, sci.cart_item_id, sci.cart_item_quantity, sci.individual_card_id FROM shopping_cart sc join shopping_cart_item sci on sc.cart_id = sci.cart_id where sc.cart_uid = 1) as t1 join (SELECT c.card_name, c.card_picture_url, ic.individual_card_quantity, ic.individual_card_condition, ic.individual_card_price, ic.individual_card_id, u.uname FROM individual_card ic JOIN card c ON c.card_id = ic.card_id JOIN user u ON ic.card_owner = u.uid) as t2 on t1.individual_card_id = t2.individual_card_id where cart_uid = ${currUserId};`
    db.query(selectStatement, (err,result) => {
        return res.json(result);
    })
})

app.get('/getDiffSellers', (req, res) => {
    currUserId = req.query["currUser"];
    const selectStatement = `select distinct uname, standard_shipping_cost, express_shipping_cost from (select t1.cart_id, t1.cart_uid, t1.cart_item_id, t1.cart_item_quantity, t1.individual_card_id, t2.card_name, t2.card_picture_url, t2.individual_card_quantity, t2.individual_card_condition, t2.individual_card_price, t2.uname, t2.standard_shipping_cost, t2.express_shipping_cost from (SELECT sc.cart_id, sc.cart_uid, sci.cart_item_id, sci.cart_item_quantity, sci.individual_card_id FROM shopping_cart sc join shopping_cart_item sci on sc.cart_id = sci.cart_id where sc.cart_uid = 1) as t1 join (SELECT c.card_name, c.card_picture_url, ic.individual_card_quantity, ic.individual_card_condition, ic.individual_card_price, ic.individual_card_id, u.uname, u.standard_shipping_cost, u.express_shipping_cost FROM individual_card ic JOIN card c ON c.card_id = ic.card_id JOIN user u ON ic.card_owner = u.uid) as t2 on t1.individual_card_id = t2.individual_card_id where cart_uid = ${currUserId}) as t3;`
    db.query(selectStatement, (err,result) => {
        return res.json(result);
    })
})

app.get('/getSavedForLater', (req, res) => {
    currUserId = req.query["currUser"];
    const selectStatement = `SELECT c.card_name, c.card_picture_url, ic.individual_card_condition, ic.individual_card_price, sfli.sfl_item_id, sfli.sfl_item_quantity, c.card_quantity, sfli.sfl_id, sfl.sfl_uid, sfli.sfl_individual_card_id, sfl.sfl_uid FROM save_for_later_item sfli join save_for_later sfl on sfli.sfl_id = sfl.sfl_id join individual_card ic on sfli.sfl_individual_card_id = ic.individual_card_id join card c on ic.card_id = c.card_id where sfl.sfl_uid = ${currUserId};`
    db.query(selectStatement, (err,result) => {
        return res.json(result);
    })
})

app.listen(3001,() => {
    console.log("running on port 3001");
})