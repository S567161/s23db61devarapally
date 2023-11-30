var Wolf = require('../models/Wolf');
// List of all Wolves
exports.Wolf_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Wolf list');
};
// for a specific Wolf.
exports.Wolf_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Wolf.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Wolf create on POST.
exports.Wolf_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Wolf create POST');
};
// Handle Wolf delete form on DELETE.
exports.Wolf_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Wolf.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Wolf update form on PUT.
exports.Wolf_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Wolf.findById(req.params.id)
        // Do updates of properties
        if (req.body.Wolf_color) toUpdate.Wolf_color = req.body.Wolf_color;
        if (req.body.Wolf_breed) toUpdate.Wolf_breed = req.body.Wolf_breed;
        if (req.body.Wolf_price) toUpdate.Wolf_price = req.body.Wolf_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};
// List of all Wolves
exports.Wolf_list = async function (req, res) {
    try {
        theWolf = await Wolf.find();
        res.send(theWolf);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.Wolf_view_all_Page = async function (req, res) {
    try {
        theWolf = await Wolf.find();
        res.render('Wolf', { title: 'Wolf Search Results', results: theWolf });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Wolf create on POST.
exports.Wolf_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Wolf();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Wolf_type":"goat", "cost":12, "size":"large"}
    document.Wolf_color = req.body.Wolf_color;
    document.Wolf_breed = req.body.Wolf_breed;
    document.Wolf_price = req.body.Wolf_price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.Wolf_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Wolf.findById(req.query.id)
        res.render('Wolfdetail',
            { title: 'Wolf Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Wolf_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('Wolfcreate', { title: 'Wolf Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a costume.
// query provides the id
exports.Wolf_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Wolf.findById(req.query.id)
        res.render('Wolfupdate', { title: 'Wolf Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.Wolf_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Wolf.findById(req.query.id)
        res.render('Wolfdelete', {
            title: 'Wolf Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

