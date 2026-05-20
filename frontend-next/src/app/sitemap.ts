import { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import cities from '@/content/cities.json';
import industries from '@/content/industries.json';

export const dynamic = 'force-static';

type CityData = { slug: string };
type IndustryData = { slug: string };

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://josegaspard.dev';
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/consultor-seo/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/precios/`, lastModified, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/casos/`, lastModified, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/sobre-mi/`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog/`, lastModified, changeFrequency: 'daily', priority: 0.85 },
    { url: `${baseUrl}/portafolio/`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/services/`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/services/seo/`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/services/desarrollo-web/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/sem/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/desarrollo-aplicaciones/`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/conferencista/`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/services/asesor-seo/`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/about/`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/contact/`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
  ];

  const cityPages: MetadataRoute.Sitemap = (cities as CityData[]).map((c) => ({
    url: `${baseUrl}/consultor-seo/${c.slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const industryPages: MetadataRoute.Sitemap = (industries as IndustryData[]).map((i) => ({
    url: `${baseUrl}/consultor-seo-industria/${i.slug}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/portafolio/${project.slug}`,
    lastModified: new Date(`${project.year}-12-31`),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [...staticPages, ...cityPages, ...industryPages, ...projectPages];
}
