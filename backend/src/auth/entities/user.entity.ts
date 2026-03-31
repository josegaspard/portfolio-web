import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string; // Will store hashed password

    @Column({ default: 'admin' })
    role: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column({ nullable: true })
    twoFactorSecret: string;

    @Column({ default: false })
    twoFactorEnabled: boolean;

    @Column('simple-json', { nullable: true })
    knownIps: string[];

    @Column({ nullable: true })
    lastLoginAt: Date;

    @Column({ nullable: true })
    lastLoginIp: string;
}
