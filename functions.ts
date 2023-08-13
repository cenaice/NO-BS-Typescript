const addNumbers = (num1: number, num2: number): number => {
  return num1 + num2;
};

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve("Data from ${url}");

function introduce(hello: string, ...names: string[]): string {
  return `${hello} ${names.join(" ")}`;
}

export function getName(user: {first:string; last:string;}): string {
    return `${user.first} ${user.last}`
}