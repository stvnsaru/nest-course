import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { CreatetaskDto } from './DTO/create-task.dto';
import { UpdateTaskDto } from './DTO/update-task.dto';

export interface User{
    name: string,
    age: number,

}

@Injectable()
export class TasksService {
    private tareas:any = []

    getTasks(){
        return this.tareas
    }

    getTask(id:number){
        const taskFound = this.tareas.find(tarea => tarea.id === id)
        if (!taskFound){
            return new NotFoundException(`La tarea con el id: ${id} no fue encontrada`);
        }
        return taskFound
    }

    createTasks(task:CreatetaskDto){
        console.log(task)
        this.tareas.push(
            {
                ...task,
                id: this.tareas.length+1,
            });
        return task
    }
    updateTasks(task:UpdateTaskDto){
        console.log(task)
        return 'Actualizando tarea'
    }
    deleteTasks(){
        return 'Eliminando tarea'
    }
    updateTasksStatus(){
        return 'Actualizando status de tarea'
    }
}
