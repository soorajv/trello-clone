import mongoose from 'mongoose';

// An interface that describes the properties
// that are requried to create a new List
interface ListAttrs {
  name: string;
  boardId: string;
}

// An interface that describes the properties
// that a List Model has
interface ListModel extends mongoose.Model<ListDoc> {
  build(attrs: ListAttrs): ListDoc;
}

// An interface that describes the properties
// that a List Document has
interface ListDoc extends mongoose.Document {
  name: string;
  boardId: string;
}

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  boardId: {
    type: String,
    required: true,
  },
});

listSchema.statics.build = (attrs: ListAttrs) => {
  return new List(attrs);
};

const List = mongoose.model<ListDoc, ListModel>('lists', listSchema);

export { List };
