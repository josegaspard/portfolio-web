import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

export enum EmailStatus {
    PENDING = 'pending',
    SENT = 'sent',
    FAILED = 'failed',
    OPENED = 'opened',
    CLICKED = 'clicked',
}

@Entity()
export class EmailLog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    recipient: string;

    @Column()
    subject: string;

    @Column({ nullable: true })
    templateName: string;

    @Column({
        type: 'simple-enum',
        enum: EmailStatus,
        default: EmailStatus.PENDING,
    })
    status: EmailStatus;

    @Column('simple-json', { nullable: true })
    metadata: any;

    @Column({ nullable: true })
    errorMessage: string;

    @CreateDateColumn()
    sentAt: Date;

    @Column({ nullable: true })
    openedAt: Date;

    @Column({ nullable: true })
    clickedAt: Date;
}
