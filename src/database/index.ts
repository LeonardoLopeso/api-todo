import { DataSource } from "typeorm";
import { Categories } from "../entities/Categories";
import { User } from "../entities/User";
import { CreatedUser1662380698588 } from "./migrations/1662380698588-CreatedUser";
import { CreateCategories1662680563213 } from "./migrations/1662680563213-CreateCategories";

const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "todobd",
    entities: [
        User,
        Categories,
    ],
    migrations: [
        CreatedUser1662380698588,
        CreateCategories1662680563213
    ],
})

dataSource.initialize();

export default dataSource;