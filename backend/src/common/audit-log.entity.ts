import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('audit_log')
export class AuditLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  action: string; // e.g., 'LOGIN_SUCCESS', 'LOGIN_FAIL', 'CONTENT_CREATE', 'SETTINGS_UPDATE', 'EMAIL_SEND'

  @Column({ nullable: true })
  userId: number;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  ip: string;

  @Column({ nullable: true })
  userAgent: string;

  @Column('simple-json', { nullable: true })
  details: Record<string, any>;

  @CreateDateColumn()
  createdAt: Date;
}
