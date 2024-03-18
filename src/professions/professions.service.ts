import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProfessionsDto } from './dto/create-professions.dto';
import { Profession, ProfessionDocument } from './schemas/professions.schema';
import { UpdateProfessionsDto } from './dto/update-professions.dto';

@Injectable()
export class ProfessionsService {
  constructor(
    @InjectModel(Profession.name)
    private professionModel: Model<ProfessionDocument>,
  ) {}

  async getAll(): Promise<Profession[]> {
    return this.professionModel.find().exec();
  }

  async getById(professionId: string): Promise<Profession> {
    return this.professionModel.findOne({ professionId: professionId }).exec();
  }

  async create(professionDto: CreateProfessionsDto): Promise<Profession> {
    const newProduct = new this.professionModel(professionDto);
    return newProduct.save();
  }

  async remove(professionId: string): Promise<Profession> {
    return this.professionModel
      .findOneAndDelete({ professionId: professionId })
      .exec();
  }

  async update(
    professionId: string,
    professionDto: UpdateProfessionsDto,
  ): Promise<Profession> {
    return this.professionModel.findOneAndUpdate(
      { professionId: professionId },
      professionDto,
      {
        new: true,
      },
    );
  }
}
