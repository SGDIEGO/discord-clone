import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        // "value" is an object containing the file's attributes and metadata
        // Validate that file does not exced 5mb
        const fiveMb = 1024 * 1024 * 5;
        return value.size < fiveMb;
    }
}