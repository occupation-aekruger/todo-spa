import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  app = AppService
  @Input() id: string = 'id'
  @Input() key: string = 'key'
  @Input() value: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    if (this.value === true)
      this.value = false
    else this.value = true
  }

  deleteItem() {
    if (confirm(`Are you sure you want to delete: ${this.key}?`) == true)
      this.app.DeleteItem(this.id)
  }
}
