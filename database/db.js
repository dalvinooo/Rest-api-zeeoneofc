var __path = process.cwd(),
      monk = require('monk'),
     { color } = require(__path + '/lib/color.js')

// Connection URL
var url = 'https://zahirr-web.herokuapp.com';
try {
if(url == 'https://zahirr-web.herokuapp.com') throw console.log(color('Cek konfigurasi database, var url ne niku dereng diisi maszehh','red'));
} catch (e) {
	return;
	}
var db = monk(url);

db.then(() => {
  console.log(color('Connected correctly to server, ArifhtGanss','green'))
})
.catch ((e) => {
	console.log(color('Error : '+ e +'\n\nGagal connect ke database, \ncek configurasi database Connection URL nipun pun bener nopo dereng niki','red'))
	})


module.exports = db
