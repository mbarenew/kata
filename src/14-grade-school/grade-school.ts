export class GradeSchool {
  private students: Map<number, string[]> = new Map();

  roster() {
    const roster = new Map<number, string[]>();
    this.students.forEach((value, key) => {
      // const sorted = JSON.parse(JSON.stringify(value.sotr()));
      const sorted = value.slice().sort();
      roster.set(key, sorted);
    });

    return Object.fromEntries(roster);
  }

  add(name: string, grade: number) {
    this.students.forEach((value, _) => {
      if (value.includes(name)) {
        value.splice(value.indexOf(name), 1);
      }
    });

    this.students.set(grade, [...this.grade(grade), name]);
  }

  grade(grade: number) {
    return this.students ? this.students.get(grade)?.slice().sort() || [] : [];
  }
}
