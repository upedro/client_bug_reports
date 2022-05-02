import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Client } from './client.entity';
import { ClientService } from './client.service';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() createClient: Client) {
    return await this.clientService.create(createClient);
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Client> {
    console.log(id)
    return await this.clientService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() client: Partial<Client>) {
    return this.clientService.update(id, client);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
}
