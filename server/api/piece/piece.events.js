/**
 * Piece model events
 */

'use strict';

import {EventEmitter} from 'events';
import Piece from './piece.model';
var PieceEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
PieceEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
for(var e in events) {
  let event = events[e];
  Piece.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    PieceEvents.emit(event + ':' + doc._id, doc);
    PieceEvents.emit(event, doc);
  };
}

export default PieceEvents;
