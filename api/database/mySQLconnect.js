let mysql = require('mysql');

let connection = mysql.createConnection({
  debug: false,
  host: 'blue.cs.sonoma.edu',
	port: 3306,
	user: 'cs386_nkamm',
	password:'ka3287',
	database: 'cs386_nkamm'
});

module.exports = connection;

// File "/usr/bin/cqlsh", line 141, in <module>
// from cassandra.cluster import Cluster
// File "cassandra/cluster.py", line 47, in
// cqlsh  blue.cs.sonoma.edu  -u kamm -p 4793287