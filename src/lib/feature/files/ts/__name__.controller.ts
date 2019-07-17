import { Controller, Body, Get, Post, Put, Param, Delete } from '@nestjs/common';

import { Create<%= classify(name) %>Dto } from './dto/create-<%= name %>.dto'
import { Update<%= classify(name) %>Dto } from './dto/update-<%= name %>.dto'
import { <%= classify(name) %> } from './interfaces/<%= name %>.interface';

@Controller('<%= dasherize(name) %>')
export class <%= classify(name) %>Controller {
  constructor(
    private readonly <%= name %>Service: <%= classify(name) %>Service
  ) { }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<<%= classify(name) %>> {
    return await this.<%= name %>.findOne(id);
  }

  @Get()
  async findAll(): Promise<<%= classify(name) %>[]> {
    return await this.<%= name %>.findAll();
  }

  @Post()
  async create(@Body() create<%= classify(name) %>Dto: Create<%= classify(name) %>Dto) {
    this.<%= name %>.create(create<%= classify(name) %>Dto);
  }

  @Put()
  async update(@Param('id') id: string, @Body() update<%= classify(name) %>Dto: Update<%= classify(name) %>Dto) {
    return await this.<%= name %>.update(id, update<%= classify(name) %>Dto);
  }

  @Delete()
  async remove(@Param('id') id: string) {
    return await this.<%= name %>.delete(id);
  }
}
