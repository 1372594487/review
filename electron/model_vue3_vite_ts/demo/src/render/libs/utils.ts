const logMsg = function (str: string): string {
    console.log(str)
    return str
}
const accumulate = (...nums: Array<number>) =>
    nums.reduce((acc: Array<number>, n: number) => [...acc, n + +acc.slice(-1)], []);
export { logMsg, accumulate }