import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "../exceptions/validation.exception";

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        // Проверяем, определён ли метатип
        if (!metadata.metatype) {
            return value; // Или выбросить исключение, если метатип необходим
        }

        // Преобразуем значение в экземпляр класса
        const obj = plainToInstance(metadata.metatype, value);
        
        // Выполняем валидацию
        const errors = await validate(obj);

        if (errors.length) {
            const messages = errors.map(err => {
                const constraints = err.constraints ? Object.values(err.constraints).join(', ') : 'Нет доступных ограничений';
                return `${err.property} - ${constraints}`;
            });
            throw new ValidationException(messages);
        }

        return obj; // Возвращаем валидированный объект
    }
}