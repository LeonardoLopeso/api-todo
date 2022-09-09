import { Repository } from "typeorm";
import dataSource from "../database";
import { Categories } from "../entities/Categories";

interface ICategories {
    name: string;
    color: string;
}

class CreateCategoriesService {
    private categoriesRepository: Repository<Categories>;

    constructor() {
        this.categoriesRepository = dataSource.getRepository(Categories);
    }

    public async execute({
        name,
        color,
    }: ICategories): Promise<Categories>{
        if(!name || !color) {
            throw new Error("Dados incompletos");
        }

        const categories = this.categoriesRepository.create({
            name,
            color,
        });

        await this.categoriesRepository.save(categories);

        return categories;
    }
}

export { CreateCategoriesService }