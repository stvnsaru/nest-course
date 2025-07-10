import {Body, Controller, Delete, Get, Param, Patch, Post, Put, Query,UsePipes, ValidationPipe} from '@nestjs/common'
import { TasksService } from './tasks.service'
import { CreatetaskDto } from './DTO/create-task.dto';
import { UpdateTaskDto } from './DTO/update-task.dto';

@Controller('/tasks')
export class TasksController {
    
    tasksService:TasksService;
    constructor(tasksService:TasksService){
        this.tasksService = tasksService;
    }

    //GET HTTP
    @Get()
    getAllTasks(@Query() query:any){
        console.log(query)
        return this.tasksService.getTasks()
    }

    @Get('/:id')
    getTask(@Param('id') id:string){
        console.log(id)
        return this.tasksService.getTask(parseInt(id))
    }

    //POST HTTP
    @Post()
    createTask(@Body() task:CreatetaskDto){
        return this.tasksService.createTasks(task)
    }

    //PUT - Actualiza todo el
    @Put()
    updateTask(@Body() task:UpdateTaskDto){
        return this.tasksService.updateTasks(task)
    }

    //DELETE
    @Delete()
    deleteTask(){
        return this.tasksService.deleteTasks()
    }

    //PATCH - Actualiza una parte en concreto de un objeto.
    @Patch()
    updateTaskStatus(){
        return this.tasksService.updateTasksStatus()
    }

}