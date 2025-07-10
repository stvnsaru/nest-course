import { Controller, Get, HttpCode, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Response,Request } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {

    @Get ('/express')
    index(@Req() request:Request, @Res() response:Response) {
        console.log(request.url)
        response.status(200).json({
            message: 'Hello',
        });
    }

    @Get('/nest')
    nestSintaxys(){
        return {'message':'hello'}
    }

    @Get('new') //Aqui defino la ruta
    @HttpCode(201) //Aqui defino el codigo
    somethingNew(){ //Nombre de la funcion del codigo personalizado
        return 'Algo nuevo xd' //Mensaje descriptivo del error
    }

    @Get('rutaPersonalizada') //Aqui defino la ruta
    @HttpCode(777) //Aqui defino el codigo
    errorChucha(){ //Nombre de la funcion del codigo personalizado
        return 'Esto es un simulacro' //Mensaje descriptivo del error
    }


//PIPES--------------------------------------------------------
    //Number
    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num:number){
        return num+14
    }

    //Boolean
    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean){
        return `El usuario esta ${status}`
    }

    //Pipe personalizado
    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateUserPipe) query: {name: string, age: number}){
        console.log(typeof(query.age))
        console.log(typeof(query.name))
        return `Hello ${query.name}, tu edad es ${query.age}`
    }
}   

