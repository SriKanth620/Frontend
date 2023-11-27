import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Srikanth';
  list:any[]=[];
  validate(task: string, des:string) {  
    this.list.push({id:this.list.length, name:task, detail: des})

  }
  deleteTask(id:number) {
    alert(id)
    this.list=this.list.filter(item=> item.id!==id)
  }
  
}
