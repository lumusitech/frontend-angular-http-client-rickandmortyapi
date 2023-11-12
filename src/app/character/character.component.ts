import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { APIResponse, Result } from '../interfaces/api-response.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  page: number;
  nroPages: number;
  response?: APIResponse;
  characters?: Result[];
  constructor(private characterService: CharacterService) {
    this.page = 1;
    this.nroPages = 0;
  }

  async ngOnInit() {
    this.response = await this.characterService.getListByPage(this.page);

    if (this.response) {
      this.characters = this.response?.results;
      this.nroPages = this.response.info.pages;
    }
  }

  async onClickPrev() {
    if (this.page === 1) this.page = this.nroPages;
    else this.page--;
    this.response = await this.characterService.getListByPage(this.page);
    this.characters = this.response?.results;
  }

  async onClickNext() {
    if (this.page === this.nroPages) this.page = 1;
    else this.page++;
    this.response = await this.characterService.getListByPage(this.page);
    this.characters = this.response?.results;
  }
}
