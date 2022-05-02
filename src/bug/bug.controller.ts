import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Bug } from './bug.entity';
import { BugService } from './bug.service';

@Controller('bug')
export class BugController {
  constructor(private readonly bugService: BugService) {}

  @Post()
  async create(@Body() createBug: Bug) {
    return await this.bugService.create(createBug);
  }

  @Get()
  findAll() {
    return this.bugService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bugService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBugDto: any) {
    return this.bugService.update(+id, updateBugDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bugService.remove(+id);
  }
}
