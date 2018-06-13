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
      ['Controlled']: 'Контролиру.',
      ['No more than one word']: 'Не больше одного слова',
      ['Empty command']: 'Введите комманду',
      ['Main']: 'Глав.',
      ['Interfaces']: 'Интерф.',
      ['Email']: 'Email',
      ['Error: your language not found']: 'Ошибка: ваш язык не найден',
      ['Language']: 'Язык',
      ['Set sample rate']: 'Установить sample rate',
      ['New password']: 'Новый пороль',
      ['Old password']: 'Старый пороль',
      ['Logout']: 'Выход',
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
      ['Main']: 'Main',
      ['Interfaces']: 'Interfaces',
      ['Email']: 'Email',
      ['Error: your language not found']: 'Error: your language not found',
      ['Language']: 'Language',
      ['Set sample rate']: 'Set sample rate',
      ['New password']: 'New password',
      ['Old password']: 'Old password',
      ['Logout']: 'Logout',
    },
  };

  constructor() { }

  T(word: string): string {
    let return_words = this.words_map[this.lang][word];
    if(return_words) {
      return return_words;
    } else {
      return '';
    }
  }

  setLang(lang_use: string): Error {
    if(isLang(lang_use)) {
      this.lang = lang_use;
      localStorage.setItem('lang_use', lang_use);
      return null;
    } {
      return new Error(this.T('Error: your language not found'));
    }
  }

  getLang(): string {
    return this.lang;
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
