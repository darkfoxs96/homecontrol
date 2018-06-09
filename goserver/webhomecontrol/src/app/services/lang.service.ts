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
      ['Reload microphone']: 'Перезагрузить микрофон',
      ['Text to the command']: 'Текст к команде',
      ['Auxiliary command']: 'Вспомогател. команда',
      ['Name']: 'Название',
      ['Command']: 'Команда',
      ['Controlled?']: 'Контролируемый?',
    },
    ['en-US']: {
      ['Control']: 'Control',
      ['Settings']: 'Settings',
      ['Commands']: 'Commands',
      ['Reload microphone']: 'Reload microphone',
      ['Text to the command']: 'Text to the command',
      ['Auxiliary command']: 'Auxiliary command',
      ['Name']: 'Name',
      ['Command']: 'Command',
      ['Controlled?']: 'Controlled?',
    },
  };

  constructor() { }

  T(word: string): string {
    return this.words_map[this.lang][word];
  }

  setLang(lang_use: string) {
    if(isLang(lang_use)) {
      this.lang = lang_use;
    }
  }
}

let listLang = ['en-US', 'ru-RU'];

let localStorageLang = localStorage.getItem('lang_use');
let lang = 'en-US';
if(localStorageLang && localStorageLang != '' && isLang(localStorageLang)) {
  lang = localStorageLang;
}
if(localStorageLang == '') {
  localStorage.setItem('lang_use', 'en-US')
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
