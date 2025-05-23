export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      for (const department of Object.keys(report.allEmployees)) {
        for (const employee of report.allEmployees[department]) {
          yield employee;
        }
      }
    },
  };
}
