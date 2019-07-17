import { Injectable } from '@nestjs/common';
import { <%= classify(name) %> } from './interfaces/<%= name %>.interface';

@Injectable()
export class <%= classify(name) %>Service {
  // Demo Purposes
  private readonly <%= name %>: <%= classify(name) %>[] = [];
  
  findOne(id: string): <%= classify(name) %> {
    // Demo Purposes
    return this.<%= name %>[0];
  }
  
  findAll(): <%= classify(name) %>[] {
    return this.<%= name %>;
  }
  
  create(<%= name %>: <%= classify(name) %>) {
    this.<%= name %>.push(<%= name %>);
  }

  update(id: string, update<%= classify(name) %>Dto: Update<%= classify(name) %>Dto) {
    // Demo Purposes
    return this.<%= name %>[0] = update<%= classify(name) %>Dto;
  }

  delete(id: string) {
    // Demo Purposes
    return this.<%= name %>[0] = '';
  }
}
