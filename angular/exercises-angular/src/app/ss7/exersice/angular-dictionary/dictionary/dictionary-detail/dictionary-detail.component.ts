import { Component, OnInit } from '@angular/core';
import {Word} from "../../model/word";
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: Word;
  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const key = this.activatedRoute.snapshot.params.txt;
    this.word = this.dictionaryService.translateWord(key);
  }

}
