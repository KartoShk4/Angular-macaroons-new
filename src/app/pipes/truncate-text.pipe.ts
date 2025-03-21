import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {
  // fullText возвращаем для того что бы реализовать возможность показа текста полностью
  transform(value: string, limit: number = 95): { truncatedText: string, fullText: string } {
    // Если текста нет, то возвращаем пустые строки
    if (!value) return { truncatedText: '', fullText: '' };

    // Если текст короче или равен 95, оставляем как есть
    if (value.length <= limit) {
      return { truncatedText: value, fullText: value };
    }

    // Обрезаем текст и добавляем три точки
    return { truncatedText: value.slice(0, limit) + '...', fullText: value };
  }
}
