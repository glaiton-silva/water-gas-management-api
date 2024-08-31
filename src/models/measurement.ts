
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'measurements'
})
export class Measurement extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  customer_code!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  measure_datetime!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  measure_type!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  measure_value!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  measure_uuid!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image_url!: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  has_confirmed!: boolean;
}
