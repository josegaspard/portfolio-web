import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { Logger } from './common/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ===== SECURITY HEADERS (Helmet) =====
  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:", "http:"],
        scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // Next.js requires unsafe-eval
        connectSrc: ["'self'", "http://localhost:3000", "http://localhost:4000"],
      },
    },
    crossOriginEmbedderPolicy: false, // Disable for external images
  }));

  // ===== CORS CONFIGURATION =====
  const whitelist = [
    'http://localhost:3000',
    'http://localhost:4000',
    'http://192.168.1.84:3000',
  ];

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || whitelist.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // ===== RATE LIMITING (Global) =====
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
  });
  app.use(limiter);

  // ===== PAYLOAD SIZE LIMITS =====
  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ limit: '10mb', extended: true }));

  // ===== START SERVER =====
  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`🚀 Backend running on http://localhost:${port}`);
  console.log(`🔒 Security: Helmet enabled, CORS configured, Rate limiting active`);
}

bootstrap().catch((err) => {
  Logger.error('Failed to start server', err.stack, 'Bootstrap');
  process.exit(1);
});
