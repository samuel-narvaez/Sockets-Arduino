const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = SocketIO.listen(server);
const mysqlConnection = require('./public/Conexion.js');

app.use(express.static(__dirname + '/public'));
server.listen(3000, () => console.log('server on port 3000'));

// Serial Comunications
const Serialport = require('serialport');
const Readline = Serialport.parsers.Readline;

const SerialPort = require('serialport');
const ReadLine = SerialPort.parsers.Readline;

const port = new Serialport('COM10', {
    baudRate: 9600 //serial begin
});

const parser = port.pipe(new Readline({ delineter: '\r\n ' }));

parser.on('open', function() {
    console.log('connection is opened');
});

parser.on('data', function(data) {
    /* let temp = parseInt(data, 10) + " °C"; */
    /* io.emit('temp', data.toString()); */
    let temp = data.substr(14, 3);
    let mg = data.substr(27, 5);
    let mq1 = data.substr(37, 5);
    let mq2 = data.substr(48, 6);
    io.emit('letra', data);
    mysqlConnection.connect(function(err) {
        /* if (err) throw err; */
        var sql = "INSERT INTO sensores (tempt_humedad, mg811, mq1, mq2) VALUES (?,?,?,?)";
        mysqlConnection.query(sql, [temp, mg, mq1, mq2], function(err, result) {
            if (err) throw err;
        });
    });

});