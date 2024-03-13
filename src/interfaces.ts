interface iUser {
  readonly id?: number;
  readonly name?: string;
  readonly surname?: string;
  readonly email?: string;
  pwd?: string;
}

interface iCourse {
  readonly id?: number;
  readonly course?: string;
  readonly description?: string;
}

export { iUser, iCourse };
