import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const ret = [];
  ret.push(new ClassRoom(19));
  ret.push(new ClassRoom(20));
  ret.push(new ClassRoom(34));
  return ret;
}
