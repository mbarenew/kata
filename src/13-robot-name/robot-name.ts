export class Robot {
  private robotName = "";
  private static robotNames: Set<string> = new Set();

  private generateRandomName(): string {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charactersLength = characters.length;
    for (let i = 0; i < 2; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    let numbers = "0123456789";
    let numbersLength = numbers.length;
    for (let i = 0; i < 3; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbersLength));
    }

    return result;
  }

  private generateName(): string {
    let name = "";
    do {
      name = this.generateRandomName();
    } while (Robot.robotNames.has(name));
    Robot.robotNames.add(name);
    return name;
  }

  constructor() {
    this.robotName = this.generateName();
  }

  public get name(): string {
    return this.robotName;
  }

  public resetName(): void {
    this.robotName = this.generateName();
  }

  public static releaseNames(): void {
    Robot.robotNames.clear();
  }
}
