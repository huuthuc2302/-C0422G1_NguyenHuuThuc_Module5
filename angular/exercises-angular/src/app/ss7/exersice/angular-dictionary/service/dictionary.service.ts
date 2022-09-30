import { Injectable } from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Word[] = [
    {keyword: 'hello', mean: 'xin chào'},
    {keyword: 'work', mean: 'làm việc'},
    {keyword: 'school', mean: 'trường học'},
    {keyword: 'color', mean: 'màu sắc'},
    {keyword: 'family', mean: 'gia đình'},
  ];
  constructor() { }
  getAll() {
    return this.words;
  }

  translateWord(wordFind: string): Word {
    return this.words.find(wordMean => wordMean.keyword === wordFind);
  }
}
