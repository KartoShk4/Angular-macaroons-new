import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, limit: number = 95): string {
    // Если текста нет, то возвращаем пустую строку
    if (!value) return '';

    // Если текст короче или равен 95, оставляем как есть
    if (value.length <= limit) {
      return value;
    }

    // Обрезаем текст и добавляем три точки
    return value.slice(0, limit) + '...';

  }
}
