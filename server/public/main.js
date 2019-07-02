const socket = io();

socket.on('letra', function(data) {
    /* const con = basedata(); */

    console.log(data);
    let a = document.getElementById('a');
    let name = document.getElementById('name1');
    let name1 = document.getElementById('name2');
    let name2 = document.getElementById('name3');
    let name3 = document.getElementById('name4');
    let b = document.getElementById('b');
    let c = document.getElementById('c');
    let d = document.getElementById('d');
    let temp = data.substr(14, 3);
    let mg = data.substr(27, 5);
    let mq1 = data.substr(37, 5);
    let mq2 = data.substr(48, 6);
    let sensor1 = data.substr(0, 11);
    let sensor2 = data.substr(18, 6);
    let sensor3 = data.substr(32, 5);
    let sensor4 = data.substr(42, 6);
    let alert = document.getElementById('alert');
    let alert1 = document.getElementById('alert1');
    let alert3 = document.getElementById('alert3');
    let alert4 = document.getElementById('alert4');
    let variable = temp.trim();
    let stmg = mg.trim();
    let variable2 = parseInt(variable);
    if (parseInt(stmg) % 2 == 0) {
        name1.style.color = 'blue';
        alert1.style.color = 'blue';
        alert1.innerHTML = `ESTABLE`;
    } else {
        name1.style.color = 'red';
        alert1.innerHTML = `FUERA DE RANGO!`;
        alert1.style.color = 'red';
    }

    let stmq1 = mq1.trim();
    if (parseInt(stmq1) % 2 == 0) {
        name2.style.color = 'blue';
        alert3.style.color = 'blue';
        alert3.innerHTML = `ESTABLE`;
    } else {
        name2.style.color = 'red';
        alert3.style.color = 'red';
        alert3.innerHTML = `FUERA DE RANGO!`;
    }
    let stmq2 = mq2.trim();
    if (parseInt(stmq2) % 2 == 0) {
        name3.style.color = 'blue';
        alert4.style.color = 'blue';
        alert4.innerHTML = `ESTABLE`;
    } else {
        name3.style.color = 'red';
        alert4.style.color = 'red';
        alert4.innerHTML = `FUERA DE RANGO!`;
    }

    if (variable2 % 2 == 0) {
        name.style.color = 'blue';
        alert.style.color = 'blue';
        alert.innerHTML = `ESTABLE`;
    } else {
        name.style.color = 'red';
        alert.style.color = 'red';
        alert.innerHTML = `FUERA DE RANGO!`;

    }

    name.innerHTML = `${sensor1}`;
    name1.innerHTML = `${sensor2}`;
    name2.innerHTML = `${sensor3}`;
    name3.innerHTML = `${sensor4}`;
    a.innerHTML = `${temp}`;
    b.innerHTML = `${mg}`;
    c.innerHTML = `${mq1}`;
    d.innerHTML = `${mq2}`;
    /* let value = data.charAt(0);
    let lol = data.substr(3, 5);
    console.log(lol);
    if (value == "a") {
        let value1 = data.substr(2);
        let a = document.getElementById('a');
        a.innerHTML = `${value1}`;
        localStorage.setItem("a", value1);
    } else {
        let value1 = data.substr(2);
        let a = document.getElementById("b");
        a.innerHTML = `${value1}`;
    } */

    /* mysqlConnection.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO sensores (tempt_humedad, mg811, mq1, mq2) VALUES (?,?,?,?)";
        mysqlConnection.query(sql, [a, b, c, d], function(err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    }); */

});