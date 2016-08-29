'use strict';

import mongoose from 'mongoose';

var PieceSchema = new mongoose.Schema({
  number: Number,
  title: String,
  description: String
});

export default mongoose.model('Piece', PieceSchema);
