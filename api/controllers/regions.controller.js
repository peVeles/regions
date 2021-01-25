const db = require('../db/testTask.db');

class regionsController {

    async createRegion(req, res) {
        const {name, path} = req.body;
        db.query('INSERT INTO regions (name, path) values ($1, $2) RETURNING *', [name, path]).
            then(person => {
                res.send({name, path});
            }).
            catch(err => {
                res.status(500).send(err.message);
            });
    }

    async getRegions(req, res) {
        db.query('SELECT * FROM regions').
        then(regions => {
            res.send(regions.rows);
        }).
        catch(err => {
            res.status(500).send(err.message);
        });
    }

    async getOneRegion(req, res) {
        const id = req.params.id;
        db.query('SELECT * FROM regions WHERE id=$1', [id]).
        then(region => {
            res.send(region.rows[0]);
        }).
        catch(err => {
            res.status(500).send(err.message);
        });
    }

    async updateRegion(req, res) {
        const {id, name, path} = req.body;
        db.query('UPDATE regions SET name=$1, path=$2 WHERE id=$3 RETURNING *', [name, path, id]).
        then(region => {
            res.send(region.rows[0]);
        }).
        catch(err => {
            res.status(500).send(err.message);
        });
    }

    async deleteRegion(req, res) {
        const id = req.params.id;
        db.query('DELETE FROM regions WHERE id=$1 RETURNING *', [id]).
        then(region => {
            res.send(region.rows[0]);
        }).
        catch(err => {
            res.status(500).send(err.message);
        });
    }
}

module.exports = new regionsController();