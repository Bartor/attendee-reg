import { Attendee, PreferenceType, Room, assignRooms } from "./attendee-reg";

const rooms: Room[] = [
  { id: 0, holds: 1 },
  { id: 1, holds: 2 },
  { id: 2, holds: 2 },
  { id: 3, holds: 2 },
  { id: 4, holds: 2 },
  { id: 5, holds: 2 },
  { id: 6, holds: 3 },
  { id: 7, holds: 3 },
  { id: 8, holds: 4 },
  { id: 9, holds: 4 },
  { id: 10, holds: 4 },
];

const attendees: Attendee[] = [
  {
    id: 1000,
    preferences: [
      { type: PreferenceType.ROOM_NUMBER, payload: 0, weight: 0.5 },
      { type: PreferenceType.ROOM_SIZE, payload: 1, weight: 0.25 },
      { type: PreferenceType.ROOM_SIZE, payload: 2, weight: 0.25 },
    ],
  },
  {
    id: 2000,
    preferences: [{ type: PreferenceType.ROOM_SIZE, payload: 2, weight: 1 }],
  },
  {
    id: 3000,
    preferences: [
      { type: PreferenceType.ROOM_SIZE, payload: 2, weight: 0.5 },
      { type: PreferenceType.ROOM_SIZE, payload: 3, weight: 0.5 },
    ],
  },
  {
    id: 4000,
    preferences: [
      { type: PreferenceType.ROOM_SIZE, payload: 2, weight: 0.5 },
      { type: PreferenceType.STAY_WITH, payload: 5000, weight: 0.5 },
    ],
  },
  {
    id: 5000,
    preferences: [
      { type: PreferenceType.ROOM_SIZE, payload: 2, weight: 0.5 },
      { type: PreferenceType.STAY_WITH, payload: 5000, weight: 0.5 },
    ],
  },
  {
    id: 6000,
    preferences: [
      { type: PreferenceType.ROOM_SIZE, payload: 4, weight: 0.75 },
      { type: PreferenceType.ROOM_NUMBER, payload: 10, weight: 0.25 },
    ],
  },
  {
    id: 7000,
    preferences: [
      { type: PreferenceType.ROOM_SIZE, payload: 4, weight: 0.25 },
      { type: PreferenceType.ROOM_NUMBER, payload: 10, weight: 0.75 },
    ],
  },
  {
    id: 8000,
    preferences: [
      { type: PreferenceType.ROOM_SIZE, payload: 4, weight: 0.25 },
      { type: PreferenceType.ROOM_NUMBER, payload: 10, weight: 0.25 },
      { type: PreferenceType.STAY_WITH, payload: 9000, weight: 0.5 },
    ],
  },
  {
    id: 9000,
    preferences: [{ type: PreferenceType.STAY_WITH, payload: 8000, weight: 1 }],
  },
  {
    id: 10000,
    preferences: [
      { type: PreferenceType.ROOM_SIZE, payload: 1, weight: 0.25 },
      { type: PreferenceType.ROOM_SIZE, payload: 2, weight: 0.25 },
      { type: PreferenceType.ROOM_SIZE, payload: 3, weight: 0.25 },
      { type: PreferenceType.ROOM_SIZE, payload: 4, weight: 0.25 },
    ],
  },
];

console.log(assignRooms(attendees, rooms, 0.75));
