import { Component, OnInit } from '@angular/core';
import {Word} from "../../model/word";
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-word',
  templateUrl: './list-word.component.html',
  styleUrls: ['./list-word.component.css']
})
export class ListWordComponent implements OnInit {
  words: Word[] = [];
  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.words = this.dictionaryService.getAll();
  }

}
