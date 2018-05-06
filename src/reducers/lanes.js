import { Lanes } from 'actions';

export default function (state = {}, action) {
  switch (action.type) {
    case Lanes.ADD_LANE:
      return {
        ...state,
        [action.laneId]: {
          laneId: action.laneId,
          name: action.name,
          cards: [],
        },
      };
    case Lanes.MOVE_LANE: // Not sure about this yet..
      return {
        // ...state,
        // [action.id]: {
        //   ...state[action.id],
        //   ...action.params,
        // }
      };
    case Lanes.LANE_ADD_CARD:
      return {
        ...state,
        [action.laneId]: {
          ...state[action.laneId],
          cards: [
            ...state[action.laneId].cards,
            action.cardId,
          ]
        },
      };
    case Lanes.DELETE_LANE:
      return {
        ...Object.keys(state).reduce((result, key) => {
          if (key !== action.laneId) {
            result[key] = state[key];
          }
          return result;
        }, {})
      };
    case Lanes.LANE_DELETE_CARD:
      return {
        ...state,
        [action.laneId]: {
          ...state[action.laneId],
          cards: state[action.laneId].cards.filter(cardId => cardId !== action.cardId),
        }
      };
    default:
      return state;
  }
}

