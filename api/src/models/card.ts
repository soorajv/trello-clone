import mongoose from 'mongoose';

// An interface that describes the properties
// that are requried to create a new Card
interface CardAttrs {
  text: string;
  listId: string;
}

// An interface that describes the properties
// that a Card Model has
interface CardModel extends mongoose.Model<CardDoc> {
  build(attrs: CardAttrs): CardDoc;
}

// An interface that describes the properties
// that a Card Document has
interface CardDoc extends mongoose.Document {
  text: string;
  listId: string;
}

const cardSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  listId: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

cardSchema.statics.build = (attrs: CardAttrs) => {
  return new Card(attrs);
};

const Card = mongoose.model<CardDoc, CardModel>('cards', cardSchema);

export { Card };
