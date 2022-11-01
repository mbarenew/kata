export class Matrix {
  private matrixRows: number[][] = [];
  private matrixColumns: number[][] = [];

  constructor(matrix: string) {
    this.matrixRows = matrix
      .split("\n")
      .map((row) => row.split(" ").map(Number));
    this.matrixColumns = this.matrixRows[0].map((_, i) =>
      this.matrixRows.map((row) => row[i])
    );
  }

  get rows(): number[][] {
    return this.matrixRows;
  }

  get columns(): number[][] {
    return this.matrixColumns;
  }
}
