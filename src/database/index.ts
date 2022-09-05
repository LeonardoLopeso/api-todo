import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { CreatedUser1662380698588 } from "./migrations/1662380698588-CreatedUser";

const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "todobd",
    entities: [
        User,
    ],
    migrations: [
        CreatedUser1662380698588,
    ],
})

dataSource.initialize();

export default dataSource;