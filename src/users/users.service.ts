
import { Injectable, Req } from '@nestjs/common';
import { TypeOrmMethods_Create } from '@app/libs/typeorm/create.orm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponseMsg } from '@app/libs/errors/api-response-msg';
import { TypeOrmMethods_Find } from '@app/libs/typeorm/find.orm';
import { ServiceOptions } from '@app/libs/typeorm/serviceOptions.interfaces';
import { PageOptionsDto } from '@app/libs/pagination/pageOption.dto';
import { TypeOrmMethods_Delete } from '@app/libs/typeorm/delete.orm';
import { TypeOrmMethods_Update } from '@app/libs/typeorm/update.orm';
import { UserEintity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user';
import { Request } from 'express';
import { LogInDto } from './dto/login.dto';

@Injectable()
export class UsersService {
  _options: ServiceOptions = {
    repository: this.pokemonRepository,
    limit: 10,
    page: 1,
  };

  constructor(
    @InjectRepository(UserEintity)
    private pokemonRepository: Repository<UserEintity>,
  ) { }
  async signUP(createUserDto: CreateUserDto) {
    const qBuilder = new TypeOrmMethods_Create(this.pokemonRepository);
    console.log('@@@@@@@@@@@@@@@{}', createUserDto['email']);

    const existEmail = await this.findOneByEmail(createUserDto['email']);
    console.log('@@@@@@@@@@@@@@@{}', existEmail);
    if (existEmail) {
      return ApiResponseMsg.errorResponse("email already exist", 406)
    }

    // call create structure
    const newRecord = await qBuilder.addNew(createUserDto, CreateUserDto);

    const addedRecord = await this.findOneById(newRecord['id']);

    // return success response
    return ApiResponseMsg.successResponse('saved successfully', addedRecord);
  }



  async login(loginUserDto: LogInDto) {

  }


  async findOneById(id: any) {
    const qBuilder = new TypeOrmMethods_Find(
      this.pokemonRepository,
      this._options,
    );
    return qBuilder.FindOneBy({
      where: {
        id
      },
    });
  }



  async findOneByEmail(email: any) {
    const qBuilder = new TypeOrmMethods_Find(
      this.pokemonRepository,
      this._options,
    );
    return qBuilder.FindOneBy({
      where: {
        email
      },
    });
  }

  async WhoAmI(req: Request) {
    console.log('@@@@@@@@@@@@@@@{whoAmI}', req.headers);
  }


}
