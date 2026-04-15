const { Pool } = require('pg')

const SQL = `
    DROP TABLE IF EXISTS inventory;
    CREATE TABLE inventory (id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name VARCHAR(255), stock INTEGER, price DOUBLE PRECISION, type VARCHAR(255));
    INSERT INTO inventory (name, stock, price, type) VALUES ('Violin', 2, 1200.99, 'String'), ('Cello', 3, 2500, 'String'), ('Acoustic Guitar', 7, 498.95, 'String'), ('Viola', 0, 0, 'String'), ('Contra-Bass', 2, 4950.99, 'String'),
    ('Flute', 4, 1000.50, 'Woodwind'), ('Clarinet', 1, 469.99, 'Woodwind'), ('Bassoon', 0, 0, 'Woodwind'), ('Saxophone', 6, 1200, 'Woodwind'),
    ('Trumpet', 1, 899.99, 'Brass'), ('Horn', 0, 0, 'Brass'), ('Trombone', 10, 2000.99, 'Brass'), ('Tuba', 0, 0, 'Brass'),
    ('Drum', 12, 600, 'Percussion'), ('Snare', 6, 200.00, 'Percussion'), ('Bongos', 0, 0, 'Percussion');
`

async function main() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false // Required for some hosted Postgres providers like Railway
    }
  });
  await pool.query(SQL);
  await pool.end();
  console.log("db reset");
}

module.exports = main;