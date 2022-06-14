import { Injectable } from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: Dictionary[] = [{
word: 'Pulse',
    mean: 'Xung'
  }, {
    word: 'Solution ',
    mean: 'Giải pháp, lời giải'
  }, {
    word: 'Integrate',
    mean: 'Tích hợp'
  }, {
    word: 'Layer',
    mean: 'Tầng, lớp'
  }, {
    word: 'Peripheral',
    mean: 'Ngoại vi'
  }, {
    word: 'Intranet',
    mean: 'mạng nội bộ'
  }, {
    word: 'Establish',
    mean: 'Thiết lập'
  }, {
    word: 'Compatible',
    mean: 'tương thích'
  }
  ];
  constructor() { }
  getAll() {
    return this.dictionaries;
  }
  findByWord(word: string) {
    return this.dictionaries.find(dictionary => dictionary.word === word);
  }
}
