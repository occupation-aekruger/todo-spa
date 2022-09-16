import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-spa';
  app = AppService

  constructor() {
    AppService.AddItem({ key: 'Do some work', value: true })
    AppService.AddItem({ key: 'Write some code', value: false })
  }

  addItem(e: any) {
    const value = e?.target?.value?.trim().ToTitleCase() ?? ''

    if (value !== '' && value !== null && value !== undefined) {
      AppService.AddItem({ key: value, value: false });
      (document.getElementById('todo-add-text') as HTMLInputElement).value = ''
    }
  }
}
