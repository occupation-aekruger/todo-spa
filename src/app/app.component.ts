import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo-spa';
  app = AppService

  constructor() {
    AppService.AddItem({ key: 'Do some work', value: false })
  }

  ngOnInit() {
    (document.getElementById('todo-add-text') as HTMLInputElement).focus()
  }

  addItem(e: any) {
    const value = e?.target?.value?.trim().ToTitleCase() ?? ''

    if (value !== '' && value !== null && value !== undefined) {
      AppService.AddItem({ key: value, value: false });
      (document.getElementById('todo-add-text') as HTMLInputElement).value = ''
    }
  }
}
