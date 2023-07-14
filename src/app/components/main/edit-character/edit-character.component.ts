import { Component, Input, OnChanges } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnChanges {

  @Input() character: Character = new Character();

  characterEdited: Character = new Character();

  constructor(private charactersService: CharactersService) {
  }

  ngOnChanges(): void {
    this.characterEdited = { ...this.character };
  }

  // Actualiza el personaje y recarga la pagina actual
  edit() {
    this.charactersService.update(this.characterEdited.id, this.characterEdited).subscribe();
    location.reload();
  }
}
