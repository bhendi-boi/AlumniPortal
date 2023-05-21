export type AlumniDetails = {
  src: string;
  name: string;
  degree: 'B Tech' | 'M Tech' | 'Dual Degree' | 'M Des' | 'PhD';
  year: number;
  department: 'CSE' | 'ECE' | 'MECH' | 'SM' | 'CSAI';
};

export type MemberData = {
  imagePath: string;
  name: string;
  position:
    | 'Professor In Charge'
    | 'Secretary'
    | 'Joint Secretary'
    | 'Coordinator';
  email: string;
};
