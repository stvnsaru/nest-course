import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('mamahuevo digo glugluglu')
export class UsersController {
    
    constructor(private usersService:UsersService){}

    @Get('/users')  
    @ApiOperation({summary: 'Amarillo amarillo lo platano'})
    @ApiResponse({status:200, description: 'Fortinait o la Babayib'})
    @ApiResponse({status:403, description: 'Olvidona, ni dos besos ni nada'})
    getUsers(){
        return this.usersService.getUsers();
    }

    @Post('/users')
    createUser(@Body() user: CreateUserDto){
        return this.usersService.createUser(user)
    }
}


