import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

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
}
