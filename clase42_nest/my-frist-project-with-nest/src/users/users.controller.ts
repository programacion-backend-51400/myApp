import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Query, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {

    if(!createUserDto.first_name) 
      throw new HttpException('Incomplete values', HttpStatus.BAD_REQUEST)

    return this.usersService.create(createUserDto);
  }

  @Post('/:b')
  testRequest(@Request() req: any) {
    console.log(req.query)
    console.log(req.params)
    console.log(req.body)

    return 'All request for one'
  }

  @Get()
  findAll(@Query('limit') limit: number) {

    console.log({limit})

    const users = this.usersService.findAll();
    return { status: 'sucess', users }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const user = this.usersService.findOne(+id);
    
    if(!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    return { status: 'success', user }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
