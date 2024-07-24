interface iUser {
  readonly id?: number;
  readonly name?: string;
  readonly surname?: string;
  readonly email?: string;
  pwd?: string;
}

interface iCourse {
  readonly id?: number;
  course?: string;
  description?: string;
}

interface iLesson {
  readonly id?: number;
  title?: string;
  course_id?: number;
}

export { iUser, iCourse, iLesson };
