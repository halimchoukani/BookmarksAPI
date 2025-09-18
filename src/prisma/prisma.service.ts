import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://user:bookmarks2025@localhost:5432/bookmarks?schema=public',
        },
      },
    });
  }
}
