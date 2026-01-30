import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ContentStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

export enum ContentType {
  PAGE = 'page',
  POST = 'post',
  HOME = 'home',
  PORTFOLIO = 'portfolio',
}

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  slug: string;

  @Column()
  title: string;

  // JSON content blocks for flexible page building
  @Column('text')
  blocks: string;

  @Column({
    type: 'simple-enum',
    enum: ContentType,
    default: ContentType.PAGE,
  })
  type: ContentType;

  @Column({
    type: 'simple-enum',
    enum: ContentStatus,
    default: ContentStatus.DRAFT,
  })
  status: ContentStatus;

  // Optimized SEO Field (JSON)
  // Contains: title, metaDesc, keywords, ogImage, canonicalUrl, schemaType
  @Column('simple-json', { nullable: true })
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string;
    ogImage?: string;
    canonical?: string;
    schemaType?: string; // 'Article', 'WebPage', 'Organization'
    noIndex?: boolean;
  };

  @Column({ nullable: true })
  coverImage: string;

  @Column({ default: 'José Gaspard' })
  author: string;

  @Column({ default: 'SEO' })
  category: string;

  @Column('simple-array', { nullable: true })
  tags: string[];

  @Column({ default: 5 })
  readingTime: number;

  @Column({ default: '3-column' })
  layout: string; // '1-column', '2-column', '3-column'

  // Portfolio-specific data (for type='portfolio')
  @Column('simple-json', { nullable: true })
  portfolioData: {
    client?: string;
    shortDescription?: string;
    heroImage?: string;
    thumbnail?: string;
    gallery?: string[];
    results?: Array<{
      metric: string;
      value: string;
      unit: string;
      label: string;
    }>;
    features?: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    technologies?: Array<{
      name: string;
      icon: string;
      category: string;
    }>;
    challenges?: Array<{
      challenge: string;
      solution: string;
    }>;
    testimonial?: {
      quote: string;
      author: string;
      position: string;
      company: string;
      avatar?: string;
    };
    liveUrl?: string;
    caseStudyUrl?: string;
  };

  @Column({ default: 0 })
  viewCount: number;


  @Column({ nullable: true })
  publishedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
