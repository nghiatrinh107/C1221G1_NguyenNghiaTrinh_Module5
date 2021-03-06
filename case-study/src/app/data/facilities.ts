import {Facility} from '../module/facility';

export const facilities: Facility[] = [
  {
    id: 1,
    name: 'Ocean suite',
    image: 'assets/img/bg-img/60.jpg',
    rentType: {
      id: 2,
      rentType: 'Day'
    },
    facilityType: {
      id: 1,
      facilityType: 'Room'
    },
    rentalFee: 200,
    floorSquare: 85.8
  },
  {
    id: 2,
      name: 'Garden superior',
    image: 'assets/img/bg-img/61.jpg',
    rentType: {
      id: 2,
      rentType: 'Day'
    },
    facilityType: {
      id: 2,
      facilityType: 'House'
    },
    rentalFee: 300,
    floorSquare: 85.8,
    numberFloor: 3
  },
  {
    id: 3,
    name: 'Garden deluxe',
    image: 'assets/img/bg-img/62.jpg',
    rentType: {
      id: 2,
      rentType: 'Day'
    },
    facilityType: {
      id: 2,
      facilityType: 'House'
    },
    rentalFee: 360,
    floorSquare: 85.8,
    numberFloor: 3
  },
  {
    id: 4,
    name: 'Pool Villa',
    image: 'assets/img/bg-img/63.jpg',
    rentType: {
      id: 2,
      rentType: 'Day'
    },
    facilityType: {
      id: 3,
      facilityType: 'Villa'
    },
    rentalFee: 200,
    floorSquare: 85.8,
    numberFloor: 3,
    poolSquare: 50
  },
  {
    id: 5,
    name: 'Beach front villa',
    image: 'assets/img/bg-img/64.jpg',
    rentType: {
      id: 2,
      rentType: 'Day'
    },
    facilityType: {
      id: 3,
      facilityType: 'Villa'
    },
    rentalFee: 200,
    floorSquare: 85.8,
    numberFloor: 3,
    poolSquare: 50
  },
  {
    id: 6,
    name: 'Ocean studio suite',
    image: 'assets/img/bg-img/65.jpg',
    rentType: {
      id: 2,
      rentType: 'Day'
    },
    facilityType: {
      id: 1,
      facilityType: 'Room'
    },
    rentalFee: 220,
    floorSquare: 85.8
  },
];
