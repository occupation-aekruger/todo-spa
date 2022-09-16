import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public static activeItemCount: number = 0
  public static items: iKvp[] = []

  constructor() { }

  public static AddItem(item: { key: string, value: boolean }) {
    this.items.push({
      id: this.NewGuid(),
      key: item.key,
      value: item.value
    })

    this.activeItemCount = this.items.filter(item => item.value === false).length
  }

  public static DeleteItem(id: string) {
    this.items = this.items.filter(function (obj) {
      return obj.id !== id;
    });

    this.activeItemCount = this.items.filter(item => item.value === false).length
  }

  public static UpdateItem(id: string, value: boolean) {
    this.items.filter(item => item.id === id)[0].value = value
    this.activeItemCount = this.items.filter(item => item.value === false).length
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