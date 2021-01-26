const db = require('./regionsDB');
const regionsError = require('./regionsError');

const createRegion = async (req, res, next) => {
    const {name, path} = req.body;
    db.query('INSERT INTO regions (name, path) values ($1, $2) RETURNING *', [name, path]).
        then((region) => {
            res.send(region);
        }).
        catch(err =>
            next(new regionsError(500, `Adding region into db failed with name=${name} and path=${path}`, err.message, true))
        );
}

const getRegions = async (req, res, next) => {
    db.query('SELECT * FROM regions').
    then(regions => {
        res.send(regions.rows);
    }).
    catch(err =>
        next(new regionsError(500, `Failed in getting regions list`, err.message, true))
    );
}

const getOneRegion = async (req, res, next) => {
    const id = req.params.id;
    db.query('SELECT * FROM regions WHERE id=$1', [id]).
    then(region => {
        res.send(region.rows[0]);
    }).
    catch(err =>
        next(new regionsError(500, `Failed in getting region with id=${id}`, err.message, true))
    );
}

const updateRegion = async (req, res, next) => {
    const {id, name, path} = req.body;
    db.query('UPDATE regions SET name=$1, path=$2 WHERE id=$3 RETURNING *', [name, path, id]).
    then(region => {
        res.send(region.rows[0]);
    }).
    catch(err =>
        next(new regionsError(500, `Failed in update region with id=${id} with data name=${name} and path=${path}`, err.message, true))
    );
}

const deleteRegion = async (req, res, next) => {
    const id = req.params.id;
    db.query('DELETE FROM regions WHERE id=$1 RETURNING *', [id]).
    then(region => {
        res.send(region.rows[0]);
    }).
    catch(err =>
        next(new regionsError(500, `Failed in delete region with id=${id}`, err.message, true))
    );
}


module.exports = {
    createRegion,
    updateRegion,
    getRegions,
    getOneRegion,
    deleteRegion };