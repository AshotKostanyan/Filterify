import mysql2 from 'mysql2/promise'
import {dbConfig} from './config/db.js'


/** @type {{[key: string]: mysql2.Pool}} */
const pools = {}

/** @type {mysql2.Pool} */
export const pool = mysql2.createPool({...dbConfig})

/**
 * @param prefix {string}
 * @param config {object}
 * @returns {mysql2.Pool}
 */
export function getPool(prefix, config) {
    if (pools[prefix]) {
        return pools[prefix]
    }

    pools[prefix] = mysql2.createPool({
        ...config,
        decimalNumbers: true,
        waitForConnections: true,
        connectionLimit: 10,
    })

    return pools[prefix]
}
