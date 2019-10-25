import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

import { IStorage } from '../interfaces/storage.interface';
import { LocalStorage } from '../models/localStorage.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class StorageService implements IStorage {
  storage: IStorage;

  constructor(
    @Inject(PLATFORM_ID) public readonly platformId: Object
  ) {
    const runningInTheBrowser: boolean = isPlatformBrowser(platformId);

    this.storage = new LocalStorage(runningInTheBrowser);
  }

  getItem(key: string): string {
    return this.storage.getItem(key);
  }

  setItem(key: string, value: string): void {
    return this.storage.setItem(key, value);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }
}
