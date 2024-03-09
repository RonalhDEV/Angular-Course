import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()  
  public characterList: Character[] = []

  @Output('dltId')
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {

    if ( !id ) return;

    console.log({id});
    //TODO: Emitir el ID deel personaje
    this.onDelete.emit(id)
  }
  // onDeleteCharacter(index: number): void {
  //   this.onDelete.emit(index)
  // }
 }