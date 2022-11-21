import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { UsersService } from 'src/users/users.service';

@Controller('notes')
export class NotesController {
  constructor(
    private readonly notesService: NotesService,
    private readonly userService: UsersService,
  ) {}

  @Post('additems')
  async create(@Body() createNoteDto: CreateNoteDto) {
    const userData = await this.userService.findOne(createNoteDto.user);
    return this.notesService.create(createNoteDto, userData);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.notesService.findOne(+id);
  // }

  // @Get('userinnotes/:id')
  // findOneuser(@Param('id') id: string) {
  //   const userData = this.userService.findOne(+id);
  //   return this.notesService.findOnenote(userData);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
