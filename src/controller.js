const pool = require('../config/config')
const logger = require('./logError')

exports.test = async(req, res) => {
    try {
        const {data} = await pool.query(`select * from detail_order`)
        res.send(data)
    } catch (e) {
        logger.error(e.message + ' ' + __filename)
    }
}