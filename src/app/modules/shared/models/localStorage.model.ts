import { IStorage } from '../interfaces/storage.interface';

export class LocalStorage implements IStorage {
  constructor(private readonly runningInTheBrowser: boolean) {}

  getItem(key: string): string {
    if (!this.runningInTheBrowser) {
      return;
    }
    
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    if (!this.runningInTheBrowser) {
      return;
    }
    
    localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    if (!this.runningInTheBrowser) {
      return;
    }
    
    localStorage.removeItem(key);
  }
}
