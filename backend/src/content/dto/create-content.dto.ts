import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsOptional,
  IsObject,
} from 'class-validator';
import { ContentStatus, ContentType } from '../entities/content.entity';

export class CreateContentDto {
  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  blocks: string; // Stored as JSON string for now

  @IsEnum(ContentType)
  @IsOptional()
  type?: ContentType;

  @IsEnum(ContentStatus)
  @IsOptional()
  status?: ContentStatus;

  @IsObject()
  @IsOptional()
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string;
    ogImage?: string;
    canonical?: string;
    schemaType?: string;
    noIndex?: boolean;
  };

  @IsString()
  @IsOptional()
  coverImage?: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsOptional()
  tags?: string[];

  @IsOptional()
  readingTime?: number;

  @IsString()
  @IsOptional()
  layout?: string;

}
