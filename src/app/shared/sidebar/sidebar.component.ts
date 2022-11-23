import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent{
  private _historial: string[] = [];

  get historial() {
    return [...this.gifsService.historial];
  }

  buscarGifs(query:string){
    this.gifsService.buscarGifs(query);
  }
  constructor( private gifsService: GifsService) { }

}
