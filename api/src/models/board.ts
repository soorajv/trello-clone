import mongoose from 'mongoose';

// An interface that describes the properties
// that are requried to create a new Board
interface BoardAttrs {
  name: string;
  userId: string;
}

// An interface that describes the properties
// that a Board Model has
interface BoardModel extends mongoose.Model<BoardDoc> {
  build(attrs: BoardAttrs): BoardDoc;
}

// An interface that describes the properties
// that a Board Document has
interface BoardDoc extends mongoose.Document {
  name: string;
  userId: string;
}

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

boardSchema.statics.build = (attrs: BoardAttrs) => {
  return new Board(attrs);
};

const Board = mongoose.model<BoardDoc, BoardModel>('boards', boardSchema);

export { Board };
