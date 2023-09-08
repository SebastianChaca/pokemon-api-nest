import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Pokemon {
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  number: number;
}
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
