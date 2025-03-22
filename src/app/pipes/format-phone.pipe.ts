import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {
  transform(phone: string): string {
    if (!phone || phone.length !== 12) {
      return phone; // Если номер некорректен, возвращаем его как есть
    }

    // Форматируем номер: +375 (29) 368-98-68
    return `+${phone.slice(0, 3)} (${phone.slice(3, 5)}) ${phone.slice(5, 8)}-${phone.slice(8, 10)}-${phone.slice(10)}`;
  }
}
