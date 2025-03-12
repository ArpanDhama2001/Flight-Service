const express = require("express");
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const { where } = require("sequelize");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Server is listening on port ${ServerConfig.PORT}`);

    // bad code
    const { City } = require("./models");
    const city = await City.findByPk(14);
    // console.log(city);
    const ccu = city.createAirport({
        name: "Netaji Subhas Chandra Bose International Airport",
        code: "CCU",
    });
    // console.log(ccu);
    // await City.destroy({
    //     where: {
    //         id: 14,
    //     },
    // });
});
