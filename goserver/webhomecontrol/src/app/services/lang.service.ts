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
      ['New password']: 'Новый пароль',
      ['Old password']: 'Старый пароль',
      ['Logout']: 'Выход',
      ['There is an empty field']: 'Есть пустое поле',
      ['E-mail setup, for password recovery']: 'Настройки электронной почты, для восстановления пароля',
      ['Password']: 'Пароль',
      ['Email password']: 'Пароль от email',
      ['Email login']: 'Логин от email',
      ['TPHC']: 'ССКД',
      ['Common buffer']: 'Общ. buffer обмена',
      ['Add controlled']: 'Добавить контролируемого',
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
      ['There is an empty field']: 'There is an empty field',
      ['E-mail setup, for password recovery']: 'E-mail setup, for password recovery',
      ['Password']: 'Password',
      ['Email password']: 'Email password',
      ['Email login']: 'Email login',
      ['TPHC']: 'TPHC',
      ['Common buffer']: 'Common buffer',
      ['Add controlled']: 'Add controlled',
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
