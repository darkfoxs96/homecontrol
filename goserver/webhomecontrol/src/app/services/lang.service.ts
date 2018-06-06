import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  public list_lang: string[] = listLang;
  private lang = lang;
  private words_map: {[key:string]:{[key:string]:string}} = {
    ['ru-RU']: {
      ['Control']: 'Управление',
      ['Settings']: 'Настройки',
      ['Commands']: 'Команды',
    },
    ['en-US']: {
      ['Control']: 'Control',
      ['Settings']: 'Settings',
      ['Commands']: 'Commands',
    },
  };

  constructor() { }

  GetWords(word: string): string {
    return this.words_map[this.lang][word];
  }
}

let listLang = ['en-US', 'ru-RU'];

let localStorageLang = localStorage.getItem('lang_use');
let lang = 'en-US';
if(localStorageLang && localStorageLang != '' && isLang(localStorageLang)) {
  lang = localStorageLang;
}

function isLang(lang: string): boolean {
  let result = false;
  listLang.forEach(function (value) {
    if(lang == value) {
      result = true;
    }
  });
  return result;
}
