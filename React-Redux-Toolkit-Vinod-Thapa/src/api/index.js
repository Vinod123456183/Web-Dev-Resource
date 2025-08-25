import Chance from "chance";

const chance = Chance();

export const fakeData = () => {
  //   console.log("fake data" + chance.name({ middle: true }));
  return chance.name({ middle: true });
};

fakeData();
