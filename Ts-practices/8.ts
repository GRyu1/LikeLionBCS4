type TProfile = { name: string; age: number; isRich?: boolean };

enum Color {
  Red = "red",
  Blue = "blue",
  Green = "green",
}

type THuman = TProfile & {
  color: Color;
};

interface IProfile {
  name: string;
  age: number;
  isRich?: boolean;
}

interface IDogProfile extends IProfile {
  voice: string;
}

const myProfile: THuman = {
  name: "h662",
  age: 18,
  isRich: false,
  color: Color.Red,
};

const yourProfile: IDogProfile = {
  name: "뽀삐",
  age: 2,
  voice: "BowWow",
};