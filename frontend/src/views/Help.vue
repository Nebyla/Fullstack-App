<template>
    <div>
        <div>
            <h1 @click="showText1 = !showText1">Объекты базы данных</h1>
            <p v-if="showText1" class="maintext">
                Таблицы - это основные объекты базы данных MySQL.<br>
                Таблица <b>client</b>, в ней хранятся брони пользователей.
                <br>Она имеет следующие столбцы: <br>
                1. Client_code<br>
                2. Client_Name<br>
                3. Client_Surname<br>
                4. Date_birth<br>
                5. Phone_Client<br>
                6. Mail_Client<br>
                7. Passport_Series<br>
                8. Passport_ID<br>
                Таблица <b>flight</b>. Данная таблица хранит всю информацию о рейсах.<br> Она имеет следующие столбцы:<br>
                1. Flight_Code<br>
                2. Departure_time<br>
                3. Arrival_time<br>
                4. Airport_Departure<br>
                5. Airport_Arrivals<br>
                6. Departure_City<br>
                7. Arrival_City<br>
                8. Date_Departure<br>
                Таблица <b>ticket</b>. Данная таблица хранит в себе всю информацию о ценах. <br>Она имеет следующие столбцы:<br>
                1. Price<br>
            </p>
        </div>
        <div>
            <h1 @click="showText2 = !showText2">Запросы базы данных</h1>
            <p v-if="showText2" class="maintext">
                1. Когда пользователь заходит на сайт, он должен увидеть все рейсы и нажать кнопку бронировать и попасть на форму, формируя данный запрос:<br>
                export const insertUser = (data, result) => {<br>
                      export const insertClient = (data, result) => { <br>
                    db.query("INSERT INTO client SET ?", [data], (err, results) => { <br>
                        if (err) { <br>
                        console.log(err); <br>
                        result(err, null); <br>
                        } else { <br>
                        result(null, results); <br>
                        } <br>
                    }); <br>
                    };<br>
                
                2. Администратор может создать рейс. Для этого ему надо будет нажать на кнопку «создать рейс»,  после чего Ему выдаст форму и после заполнения сформируется SQL запрос <br>
                export const insertFlight = (data, result) => {<br>
                db.query("INSERT INTO flight SET ?", [data], (err, results) => {<br>
                    if (err) {<br>
                    console.log(err);<br>
                    result(err, null);<br>
                    } else {<br>
                    result(null, results);<br>
                    }<br>
                });<br>
                };<br>

                3.Пользователь может искать по города и цене. Вписать город или цену, нажать на поиск, после чего создаться следующий SQL запрос<br> 
                export const searchFlight = (searchQuery,searchDataQuery, result) => {<br>
                const query = `SELECT * FROM flight WHERE Departure_City LIKE '%${searchQuery}%' AND Price LIKE '%${searchDataQuery}%';`;<br>
                db.query(query, (err, results) => {<br>
                    if (err) {<br>
                    console.log(err);<br>
                    result(err, null);<br>
                    } else {<br>
                    result(null, results);<br>
                    }<br>
                });<br>
                };<br>

                4.Администратор может искать по Серии паспорта. Вписать серии паспорта, нажать на поиск, после чего создаться следующий SQL запрос<br> 
                export const searchPSClient = (searchPSQuery, result) => {<br>
                    const query = `SELECT * FROM client WHERE Passport_Series LIKE '%${searchPSQuery}%'`;<br>
                db.query(query, (err, results) => {<br>
                    if (err) {<br>
                    console.log(err);<br>
                    result(err, null);<br>
                    } else {<br>
                    result(null, results);<br>
                    }<br>
                });<br>
                };<br>

                5.Администратор может искать по номер телефону. Вписать номер телефону, нажать на поиск, после чего создаться следующий SQL запрос<br> 
                export const searchTelClient = (searchTelQuery, result) => {<br>
                const query = `SELECT * FROM client WHERE Phone_Client LIKE '%${searchTelQuery}%'`;<br>
                db.query(query, (err, results) => {<br>
                    if (err) {<br>
                    console.log(err);<br>
                    result(err, null);<br>
                    } else {<br>
                    result(null, results);<br>
                    }<br>
                });<br>
                };<br>

                

                7. Администратор может изменить данные клиента, после чего выполниться следующий SQL запрос<br>
                export const updateClientById = (data, id, result) => {<br>
                db.query(<br>
                "UPDATE client SET Client_Name = ?, Client_Surname = ?, Date_birth = ?, Phone_Client = ?, Mail_Client = ?, Passport_Series = ?, Passport_ID = ? WHERE Client_code = ?",<br>
                [data.Client_Name, data.Client_Surname, data.Date_birth, data.Phone_Client, data.Mail_Client, data.Passport_Series, data.Passport_ID, id],<br>
                    (err, results) => {<br>
                    if (err) {<br>
                        console.log(err);<br>
                        result(err, null);<br>
                    } else {<br>
                        result(null, results);<br>
                    }<br>
                    }<br>
                );<br>
                };<br>
            </p>
        </div>
        <div>
            <h1 @click="showText3 = !showText3">Главный интерфейс</h1>
            <p v-if="showText3" class="maintext">
                Главный интерфейс состоит из навигационного меню, в котором присутствует вкладка "Рейсы" для возврата на главный интерфейс, вкладка "Help", в котором можно посмотреть Справочный материал<br>
                В главном интерфейсе, также присутствуют Рейсы, которые были загружены на сайт.<br>
                Рисунок представлен ниже<br>
                <img src="https://sun9-20.userapi.com/impg/-9Pj2Brwj9_g17R5egPBpIc9Ysf04MjBVI-HaA/ZYMD0_OaMyQ.jpg?size=1280x597&quality=96&sign=ca5f1c3c6fd2575c45948bcc35c6d1a7&type=album">

            </p>
        </div>
        <div>
            <h1 @click="showText4 = !showText4">ERR-диаграмма базы данных</h1>
            <p v-if="showText4" class="maintext">
                ERR-диаграмма базы данных онлайн Бронирования авиарейсов<br>
                Рисунок представлен ниже
                <img src="https://sun9-44.userapi.com/impg/voqHYr7MuCHc_EWSFRysrcFMdwWOacR3zMgSnA/ysDseLOoVA4.jpg?size=933x964&quality=96&sign=05f4eea224e3c86d898bd46ae51ae205&type=album">
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: "Help",
    data() {
        return {
            showText1: false,
            showText2: false,
            showText3: false,
            showText4: false,
        }
    },
};
</script>

<style scoped>

h1{
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-size: 36px;
    font-weight: bold;
    cursor:pointer;
    text-decoration: underline;
    color: #FF5733;
    text-align: center;
    text-shadow: 2px 2px 2px #000000;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-right:50px;
}

.maintext{
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-family:Georgia, 'Times New Roman', Times, serif;
    border: 1px solid #e6e6e6;
    color:darkorange;
    text-align: center;
    text-shadow: 2px 2px 2px #000000;
    font-size: 20px;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 20px;
}
</style>