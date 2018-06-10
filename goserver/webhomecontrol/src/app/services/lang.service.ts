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
      ['Text to the command']: 'Текст к команде(buffer)',
      ['Auxiliary command']: 'Вспомогател. команда',
      ['Name']: 'Название',
      ['Command']: 'Команда',
      ['Controlled?']: 'Контролиру.?',
      ['Close']: 'Отмена',
      ['Add command']: 'Добавить команду',
      ['Save']: 'Сохранить',
      ['Add callsign']: 'Добавить позывной',
      ['Controlled']: 'Контролируемый',
      ['No more than one word']: 'Не больше одного слова',
      ['Empty command']: 'Введите комманду',
    },
    ['en-US']: {
      ['Control']: 'Control',
      ['Settings']: 'Settings',
      ['Commands']: 'Commands',
      ['Reload microphone']: 'Reload microphone',
      ['Text to the command']: 'Text to the command(buffer)',
      ['Auxiliary command']: 'Auxiliary command',
      ['Name']: 'Name',
      ['Command']: 'Command',
      ['Controlled?']: 'Controlled?',
      ['Close']: 'Close',
      ['Add command']: 'Add command',
      ['Save']: 'Save',
      ['Add callsign']: 'Add callsign',
      ['Controlled']: 'Controlled',
      ['No more than one word']: 'No more than one word',
      ['Empty command']: 'Empty command',
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
