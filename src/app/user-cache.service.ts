import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCacheService {
  private cache: Map<number, any> = new Map();

  constructor() { }

  getUser(userId: number): any {
    return this.cache.get(userId);
  }

  cacheUser(userId: number, userData: any): void {
    this.cache.set(userId, userData);
  }

  clearCache(): void {
    this.cache.clear();
  }
}