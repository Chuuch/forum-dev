import { DataTypes, Model, Optional } from "sequelize";
import db from "../config/db";
import User from "./user.model";

export type PostAttributes = {
  id: string;
  title: string;
  content: string;
  image?: string;
  userId: string;
  createadAt?: Date;
  updatedAt?: Date;
};

interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}

class Post
  extends Model<PostAttributes, PostCreationAttributes>
  implements PostAttributes
{
  public id!: string;
  public title!: string;
  public content!: string;
  public image?: string;
  public userId!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Post.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize: db,
    tableName: "posts",
    modelName: "Post",
    timestamps: true,
    underscored: true,
  }
);

User.hasMany(Post, { foreignKey: "userId", as: "posts" });
Post.belongsTo(User, { foreignKey: "userId", as: "author" });

export default Post;
