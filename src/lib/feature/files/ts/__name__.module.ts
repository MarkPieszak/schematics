import { Module } from '@nestjs/common';
// todo - maybe add imports options?
// import { TypeOrmModule } from '@nestjs/typeorm';

import { <%= classify(name) %>Controller } from './<%= name %>.controller';
import { <%= classify(name) %>Service } from './<%= name %>.service';

// todo ?
// import { <%= classify(name) %> } from './<%= name %>.entity';

@Module({
  // todo - add imports options ?
  // imports: [ TypeOrmModule.forFeature([<%= classify(name) %>]) ],
  controllers: [<%= classify(name) %>Controller],
  providers: [<%= classify(name) %>Service],
})
export class <%= classify(name) %>Module { }
