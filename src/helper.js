export const findRider = (riders = [], riderId) =>
  riders.find((rider) => rider.id === riderId);

export const findHorse = (horses = [], horseId) =>
  horses.find((horse) => horses.id === horseId);

export const getHorsesForRider = (horses = [], riderId) =>
  !riderId ? horses : horses.filter((horse) => horse.riderId === riderId);

export const countHorsesForRider = (horses = [], riderId) =>
  horses.filter((horse) => horse.riderId === riderId).length;
