module.exports = function listeners(app) {
    require('./mentions')(app);
    require('./messages')(app);
}