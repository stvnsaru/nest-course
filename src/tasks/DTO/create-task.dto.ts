import {
    IsString,
    MinLength,
    minLength
} from 'class-validator'
export class CreatetaskDto{

    @IsString()
    @MinLength(1)
    title:string

    @IsString()
    @MinLength(1)
    description: string
}