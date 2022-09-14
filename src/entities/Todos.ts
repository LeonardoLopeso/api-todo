import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categories } from "./Categories";
import { User } from "./User";

@Entity("todos")
export class Todos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    user_id: number;

    @JoinColumn({ name: "user_id" } )
    @ManyToOne(() => User, user => user.id)
    user: User;
    
    @Column()
    category_id: number;
    
    @JoinColumn({ name: "category_id" })
    @ManyToOne(() => Categories, cat => cat.id)
    category: Categories;

    @Column()
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}