import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public static items: iKvp[] = []

  constructor() { }

  public static AddItem(item: { key: string, value: boolean }) {
    this.items.push({
      id: this.NewGuid(),
      key: item.key,
      value: item.value
    })
  }

  public static DeleteItem(id: string) {
    this.items = this.items.filter(function (obj) {
      return obj.id !== id;
    });
  }

  private static NewGuid(): string {
    return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, (c) => {
      const r = Math.floor(Math.random() * 16);
      return r.toString(16);
    });
  }
}

interface iKvp {
  id: string,
  key: string,
  value: boolean
}