export function findSmallestDifference(
    firstArray: number[],
    secondArray: number[],
) {
    firstArray.sort((a, b) => a - b);
    secondArray.sort((a, b) => a - b);

    let a = 0;
    let b = 0;

    // Initialize result max safe value
    let result = Number.MAX_SAFE_INTEGER;

    while (a < firstArray.length && b < secondArray.length) {
        if (Math.abs(firstArray[a] - secondArray[b]) < result) {
            result = Math.abs(firstArray[a] - secondArray[b]);
        }

        // Move Smaller Value pointer
        if (firstArray[a] < secondArray[b]) {
            a++;
        } else {
            b++;
        }
    }

    return result;
}
