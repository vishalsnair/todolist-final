import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Repository } from 'typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Notes } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Notes)
    private noteRepo: Repository<Notes>,
  ) {}
  create(createNoteDto: CreateNoteDto, userData: CreateUserDto) {
    return this.noteRepo.save({
      discription: createNoteDto.discription,
      user: userData,
    });
  }

  findAll() {
    return this.noteRepo.find({ relations: ['user'] });
  }
  findOnenote(userData: any) {
    return this.noteRepo.find({ where: { user: userData } });
  }
  // findOne(id: number) {
  //   return this.noteRepo.findOneBy(id);
  // }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return this.noteRepo.update(
      { id: id },
      { discription: updateNoteDto.discription },
    );
  }

  remove(id: number) {
    return this.noteRepo.delete(id);
  }
}
